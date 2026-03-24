const Industries = {
  slug: "industries",
  admin: { useAsTitle: "title", defaultColumns: ["title", "eyebrow", "dark", "active", "order"] },
  access: { read: () => true },
  fields: [
    { name: "slug",      type: "text", required: true, unique: true },
    { name: "eyebrow",   type: "text", required: true },
    { name: "title",     type: "text", required: true },
    { name: "subtitle",  type: "text", required: true },
    { name: "desc",      type: "textarea", required: true },
    { name: "tag",       type: "text" },
    { name: "tagColor",  type: "text", defaultValue: "#1A50A0" },
    {
      name: "usecases", type: "array",
      fields: [{ name: "label", type: "text", required: true }],
    },
    { name: "stat",      type: "text", required: true },
    { name: "statLabel", type: "text", required: true },
    { name: "dark",      type: "checkbox", defaultValue: false },
    { name: "active",    type: "checkbox", defaultValue: true  },
    { name: "order",     type: "number",   defaultValue: 0     },
  ],
};

module.exports = Industries;
