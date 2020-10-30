const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.reduce((acc, val) => [...acc, ...val], [])
  //let count = arr.reduce((acc, cats) => acc + (acc[cats] !== '^^' ? 0 : acc[cats] + 1), 0)
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '^^') {
      count++
    }
  }
  return count
};
