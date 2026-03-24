const CloudinaryField = require("../components/CloudinaryField");

/** @type {import('payload/types').CollectionConfig} */
const Projects = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "showInHero", "showInExplore", "active"],
  },
  access: { read: () => true },
  fields: [
    { name: "name",     type: "text", required: true },
    { name: "location", type: "text", required: true, defaultValue: "Ahmedabad, Gujarat" },
    {
      name: "category", type: "select", required: true,
      options: [
        { label: "Aerial View",   value: "aerial"   },
        { label: "360° Interior", value: "interior" },
      ],
    },
    { name: "tourUrl", type: "text", required: true },
    {
      name:  "thumbnail",
      type:  "text",
      label: "Thumbnail",
      admin: { components: { Field: CloudinaryField } },
    },
    { name: "badge",      type: "text" },
    { name: "badgeColor", type: "text", defaultValue: "#1A50A0" },
    { name: "accent",     type: "text", defaultValue: "#5B8FE0" },
    {
      name: "rooms", type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    { name: "showInHero",     type: "checkbox", defaultValue: false },
    { name: "showInLiveDemo", type: "checkbox", defaultValue: false },
    { name: "showInVRTours",  type: "checkbox", defaultValue: false },
    { name: "showInExplore",  type: "checkbox", defaultValue: true  },
    { name: "active", type: "checkbox", defaultValue: true },
    { name: "order",  type: "number",   defaultValue: 0   },
  ],
};

module.exports = Projects;
