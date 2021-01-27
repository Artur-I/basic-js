const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;
  let arr = [];
  for (let member of members) {
    if (typeof member === 'string') {
      arr.push(member.trim().charAt(0).toUpperCase());
    }
  }
  return arr.sort().join('');
};
