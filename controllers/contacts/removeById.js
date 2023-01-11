const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contact.findOneAndDelete({ contactId, owner });

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = removeById;
