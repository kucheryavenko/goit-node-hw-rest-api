const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { path: tempUpload, filename } = req.file;
  const { _id } = req.user;

  const image = await Jimp.read(tempUpload);
  image.resize(250, 250).write(tempUpload);

  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", filename);

  const result = await User.findOneAndUpdate(_id, { avatarURL });

  if (!result) {
    throw HttpError(401, "Not authorized");
  }

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
