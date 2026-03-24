const HomeFeatures = {
  slug: "home-features",
  admin: { useAsTitle: "title", defaultColumns: ["title", "active", "order"] },
  access: { read: () => true },
  fields: [
    { name: "icon",        type: "text",     required: true },
    { name: "title",       type: "text",     required: true },
    { name: "description", type: "textarea", required: true },
    { name: "active",      type: "checkbox", defaultValue: true },
    { name: "order",       type: "number",   defaultValue: 0    },
  ],
};

module.exports = HomeFeatures;
