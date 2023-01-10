const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split(".");
    cb(null, `${uuidv4()}.${extension}`);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
