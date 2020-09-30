// const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== String) {
    str = str.toString();
  }

  if (typeof options.addition !== String) {
    options.addition = options.addition.toString();
  }
};
