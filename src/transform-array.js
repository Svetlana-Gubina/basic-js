module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new TypeError("Wrong data type!");
  }

  if (arr.length === 0) {
    return arr;
  }

  const myObj = {
    1: "--discard-prev",
    2: "--discard-next",
    3: "--double-prev",
    4: "--double-next",
  };

  let result = [];
  let test = arr.slice();

  for (let i = 0; i < test.length; i++) {
    if (!Object.values(myObj).includes(test[i])) {
      result.push(test[i]);
    }

    if (test[i] === myObj[1] && i !== 0) {
      result.splice(i - 1, 1);
    }

    if (test[i] === myObj[2] && i !== test.length - 1) {
      test.splice(i + 1, 1);
    }

    if (test[i] === myObj[3] && i !== 0) {
      result.push(test[i - 1]);
    }

    if (test[i] === myObj[4] && i !== test.length - 1) {
      result.push(test[i + 1]);
    }
  }
  return result.filter((item) => !Object.values(myObj).includes(item));
};
