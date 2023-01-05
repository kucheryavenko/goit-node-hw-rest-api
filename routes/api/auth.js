const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { authSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(ctrl.signup));

module.exports = router;
