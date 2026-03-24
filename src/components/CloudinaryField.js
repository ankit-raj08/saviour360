const React = require("react");
const { useField } = require("payload/components/forms");

const CloudinaryField = ({ path, label }) => {
  const { value, setValue } = useField({ path });
  const [uploading, setUploading] = React.useState(false);
  const [error, setError]         = React.useState("");
  const inputRef = React.useRef();

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res  = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.url) setValue(data.url);
      else setError(data.error || "Upload failed");
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return React.createElement("div", { style: { marginBottom: 24 } },
    React.createElement("label", {
      style: { display: "block", marginBottom: 8, fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }
    }, label || "Thumbnail"),

    // Image preview
    value && React.createElement("div", { style: { marginBottom: 12 } },
      React.createElement("img", {
        src: value, alt: "preview",
        style: { width: "100%", maxWidth: 340, height: 200, objectFit: "cover", borderRadius: 10, display: "block", border: "1px solid rgba(255,255,255,0.1)" }
      })
    ),

    // Buttons row
    React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" } },
      React.createElement("button", {
        type: "button",
        onClick: () => inputRef.current && inputRef.current.click(),
        disabled: uploading,
        style: {
          padding: "9px 20px", borderRadius: 7, border: "none", cursor: uploading ? "not-allowed" : "pointer",
          background: uploading ? "rgba(26,80,160,0.4)" : "linear-gradient(135deg,#1A50A0,#2E6CC8)",
          color: "#fff", fontSize: 13, fontWeight: 600, transition: "opacity 0.2s",
        }
      }, uploading ? "Uploading..." : value ? "Change Image" : "Upload Image"),

      value && React.createElement("button", {
        type: "button",
        onClick: () => { setValue(""); if (inputRef.current) inputRef.current.value = ""; },
        style: {
          padding: "9px 14px", borderRadius: 7, border: "1px solid rgba(255,255,255,0.12)",
          cursor: "pointer", background: "transparent", color: "rgba(255,255,255,0.55)", fontSize: 13,
        }
      }, "Remove")
    ),

    // Hidden file input
    React.createElement("input", {
      ref: inputRef, type: "file", accept: "image/*",
      style: { display: "none" }, onChange: handleFile
    }),

    // Error
    error && React.createElement("div", {
      style: { marginTop: 6, fontSize: 12, color: "#ff6b6b" }
    }, error),

    // URL display
    value && React.createElement("div", {
      style: { marginTop: 6, fontSize: 10, color: "rgba(255,255,255,0.25)", wordBreak: "break-all" }
    }, value)
  );
};

module.exports = CloudinaryField;
