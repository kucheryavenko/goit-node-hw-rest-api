const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate } = require("../../middlewares");
const { authSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(ctrl.login));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
