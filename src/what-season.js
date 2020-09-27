// const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log("date: " + date);
  if (arguments.length == 0) {
    return "Unable to determine the time of year!";
  }

  if (isNaN(Date.parse(date))) {
    throw new TypeError("Invalid date argument");
  }

  if (new Date(Date.parse(date)).toString() === new Date().toString()) {
    throw new TypeError("Invalid date argument");
  }

  let monthNumber = new Date(Date.parse(date)).getMonth();
  let season;

  switch (true) {
    case (0 <= monthNumber && monthNumber <= 1) || monthNumber === 11:
      season = "winter";
      break;
    case 2 <= monthNumber && monthNumber <= 4:
      season = "spring";
      break;
    case 5 <= monthNumber && monthNumber <= 7:
      season = "summer";
      break;
    case 8 <= monthNumber && monthNumber <= 10:
      season = "autumn (fall)";
      break;
  }

  return season;
};
