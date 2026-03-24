const CloudinaryField = require("../components/CloudinaryField");

const Media = {
  slug: "media",
  labels: { singular: "Media", plural: "Media" },
  access: { read: () => true },
  fields: [
    { name: "alt", type: "text", label: "Alt Text" },
    {
      name:  "url",
      type:  "text",
      label: "Image",
      admin: { components: { Field: CloudinaryField } },
    },
    { name: "filename", type: "text", admin: { hidden: true } },
  ],
  hooks: {
    afterRead: [
      ({ doc }) => doc,
    ],
  },
};

module.exports = Media;
