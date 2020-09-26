// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // ['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
  if (!Array.isArray(members)) {
    return false;
  }

  const result = members.filter((member) => typeof member === "string");
  let name = "";
  result.forEach((item) => {
    name += item.trim().charAt(0);
  });

  return name
    .split("")
    .map((item) => item.toUpperCase())
    .sort()
    .join("");
};
