const PageFeatures = {
  slug: "page-features",
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "active", "order"] },
  access: { read: () => true },
  fields: [
    { name: "icon",     type: "text",   required: true },
    {
      name: "category", type: "select", required: true,
      options: ["Immersive","Interactive","Navigation","Distribution","Engagement","Data","Quality","Privacy"].map(v => ({ label: v, value: v })),
    },
    { name: "title",    type: "text",     required: true },
    { name: "headline", type: "text",     required: true },
    { name: "desc",     type: "textarea", required: true },
    {
      name: "points", type: "array",
      fields: [{ name: "text", type: "text", required: true }],
    },
    { name: "stat",      type: "text"     },
    { name: "showEmbed", type: "checkbox", defaultValue: false },
    { name: "embedSrc",  type: "text"     },
    { name: "active",    type: "checkbox", defaultValue: true },
    { name: "order",     type: "number",   defaultValue: 0    },
  ],
};

module.exports = PageFeatures;
