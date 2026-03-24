const Users = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email" },
  fields: [
    { name: "name", type: "text", required: true },
  ],
};

module.exports = Users;
