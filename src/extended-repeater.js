module.exports = function repeater(str, options) {
  if (str === null) {
    str = "null";
  }

  if (typeof str !== String) {
    str = str.toString();
  }

  let separator = options.separator || "+";
  let additionSeparator = options.additionSeparator || "";

  if (options.repeatTimes == 0 && options.additionRepeatTimes == 0) {
    return str;
  }

  let addition;
  let keys = Object.keys(options);

  if (keys.includes('addition') && options.addition === null) {
    addition = "null";
  } else if (keys.includes('addition') && typeof options.addition !== String) {
    addition = options.addition.toString();
  } else {
    addition = "";
  }

  let fullAddition = `${addition}${additionSeparator}`;

  if (addition !== "") {
    let fullAdditionRepeat = fullAddition.repeat(options.additionRepeatTimes - 1) + options.addition;
    let construction = `${str}${fullAdditionRepeat}`;
    let fullConstruction = `${str}${fullAdditionRepeat}${separator}`;
    return fullConstruction.repeat(options.repeatTimes - 1) + construction;
  } else {
    return `${str}${separator}`.repeat(options.repeatTimes - 1).concat(str);
  }
};
