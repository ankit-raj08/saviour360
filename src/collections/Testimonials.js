const Testimonials = {
  slug: "testimonials",
  admin: { useAsTitle: "name", defaultColumns: ["name", "company", "active", "order"] },
  access: { read: () => true },
  fields: [
    { name: "name",           type: "text",     required: true },
    { name: "role",           type: "text",     required: true },
    { name: "company",        type: "text",     required: true },
    { name: "avatarInitials", type: "text"      },
    { name: "quote",          type: "textarea", required: true },
    { name: "active",         type: "checkbox", defaultValue: true },
    { name: "order",          type: "number",   defaultValue: 0    },
  ],
};

module.exports = Testimonials;
