const { Contact } = require("../../models");
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;

  if (!favorite) {
    throw HttpError(400, "missing field favorite");
  }

  const result = await Contact.findOneAndUpdate(
    { contactId, owner },
    req.body,
    {
      new: true,
    }
  );

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json(result);
};

module.exports = updateStatusContact;
