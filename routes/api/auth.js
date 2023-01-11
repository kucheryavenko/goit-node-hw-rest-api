const express = require("express");

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { authSchema, updateSubscriptionSchema } = require("../../schemas");

const router = express.Router();

router.post("/signup", validateBody(authSchema), ctrlWrapper(ctrl.signup));

router.post("/login", validateBody(authSchema), ctrlWrapper(ctrl.login));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.get("/current", authenticate, ctrlWrapper(ctrl.currentUser));

router.patch(
  "/",
  authenticate,
  validateBody(updateSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
