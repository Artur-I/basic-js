const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addStr = ''
  if (options.addition || options.addition === false || options.addition === null) {
    addStr = Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator ? options.additionSeparator : '|');
  };
  let newStr = `${String(str)}${addStr}`;
  return Array(options.repeatTimes).fill(newStr).join(options.separator ? options.separator : '+');
};
