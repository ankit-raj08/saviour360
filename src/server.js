require("dotenv").config();
const express    = require("express");
const payload    = require("payload");
const multer     = require("multer");
const cloudinary = require("cloudinary").v2;

// ─── Cloudinary config ────────────────────────────────────────────────────────
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Validate at startup — shows in Railway logs so you catch missing vars immediately
const missingVars = ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"]
  .filter(k => !process.env[k]);

if (missingVars.length > 0) {
  console.error("❌ MISSING ENV VARS — Cloudinary uploads will fail:", missingVars.join(", "));
  console.error("   Set these in Railway: Dashboard → Your Service → Variables");
} else {
  console.log("✅ Cloudinary configured — cloud:", process.env.CLOUDINARY_CLOUD_NAME);
}

// ─── Express + multer ─────────────────────────────────────────────────────────
const app    = express();
const upload = multer({ storage: multer.memoryStorage() });

app.get("/", (_, res) => res.redirect("/admin"));

// ─── Custom upload endpoint — registered BEFORE payload.init() ───────────────
// Files go: Browser → Railway (RAM only) → Cloudinary. Nothing written to disk.
app.post("/api/upload", upload.single("file"), async (req, res) => {
  console.log("[upload] Request received —",
    req.file ? req.file.originalname + " (" + req.file.size + " bytes)" : "NO FILE");

  try {
    if (!req.file) {
      console.warn("[upload] Rejected — no file in request");
      return res.status(400).json({ error: "No file provided" });
    }

    console.log("[upload] Streaming to Cloudinary folder: saviour360 ...");

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "saviour360", resource_type: "image" },
        (err, result) => {
          if (err) { console.error("[upload] Cloudinary error:", err.message); reject(err); }
          else      { resolve(result); }
        }
      );
      stream.end(req.file.buffer);
    });

    console.log("[upload] SUCCESS →", result.secure_url);
    res.json({
      url:      result.secure_url,
      publicId: result.public_id,
      width:    result.width,
      height:   result.height,
    });
  } catch (err) {
    console.error("[upload] FAILED:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// ─── Payload init ─────────────────────────────────────────────────────────────
const start = async () => {
  await payload.init({
    secret:   process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express:  app,
    onInit:   () => payload.logger.info("Admin URL: " + payload.getAdminURL()),
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log("✅ Saviour360 CMS running on port " + PORT));
};

start();
