const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return 1 + (arr instanceof Array ? arr.reduce((acc, elem) => {
      return Math.max(acc, this.calculateDepth(elem))
    }, 0) : -1)
  };
};
