const { buildConfig } = require("payload/config");
const { webpackBundler } = require("@payloadcms/bundler-webpack");
const { mongooseAdapter } = require("@payloadcms/db-mongodb");
const { slateEditor } = require("@payloadcms/richtext-slate");
const Logo = require("./src/admin/graphics/Logo");
const Icon = require("./src/admin/graphics/Icon");

const Projects     = require("./src/collections/Projects");
const Testimonials = require("./src/collections/Testimonials");
const FAQs         = require("./src/collections/FAQs");
const HomeFeatures = require("./src/collections/HomeFeatures");
const PageFeatures = require("./src/collections/PageFeatures");
const Industries   = require("./src/collections/Industries");
const Media        = require("./src/collections/Media");
const Users        = require("./src/collections/Users");

module.exports = buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3001",
  admin: {
    user:    Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "— Saviour360",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "mongodb://localhost/saviour360",
  }),
  collections: [
    Projects,
    Testimonials,
    FAQs,
    HomeFeatures,
    PageFeatures,
    Industries,
    Media,
    Users,
  ],
  cors: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "https://saviour360.vercel.app",
  ],
  csrf: [
    process.env.FRONTEND_URL || "http://localhost:5173",
    "https://saviour360.vercel.app",
  ],
  upload: {
    limits: { fileSize: 10000000 },
  },
});
