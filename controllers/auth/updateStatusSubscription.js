const { User } = require("../../models");

const updateSubscription = async (req, res, next) => {
  const { _id: owner } = req.user;

  const { email, subscription } = await User.findByIdAndUpdate(
    owner,
    req.body,
    {
      new: true,
    }
  );

  res.json({
    user: {
      email,
      subscription,
    },
  });
};

module.exports = updateSubscription;
