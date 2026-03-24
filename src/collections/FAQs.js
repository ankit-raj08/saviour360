const FAQs = {
  slug: "faqs",
  admin: { useAsTitle: "question", defaultColumns: ["question", "active", "order"] },
  access: { read: () => true },
  fields: [
    { name: "question", type: "text",     required: true },
    { name: "answer",   type: "textarea", required: true },
    { name: "active",   type: "checkbox", defaultValue: true },
    { name: "order",    type: "number",   defaultValue: 0    },
  ],
};

module.exports = FAQs;
