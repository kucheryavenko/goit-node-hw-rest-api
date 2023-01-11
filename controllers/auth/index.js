const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateSubscription = require("./updateStatusSubscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  signup,
  login,
  logout,
  currentUser,
  updateSubscription,
  updateAvatar,
};
