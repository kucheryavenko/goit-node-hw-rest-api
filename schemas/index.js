const { addSchema, updateFavoriteSchema } = require("./contacts");
const {
  authSchema,
  emailSchema,
  updateSubscriptionSchema,
} = require("./users");

module.exports = {
  addSchema,
  emailSchema,
  updateFavoriteSchema,
  authSchema,
  updateSubscriptionSchema,
};
