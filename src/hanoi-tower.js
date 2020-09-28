// const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_IN_HOUR = 3600;
  let min = Math.pow(2, disksNumber) - 1;
  let time = Math.floor((min * SECONDS_IN_HOUR) / turnsSpeed);

  return { turns: min, seconds: time };
};
