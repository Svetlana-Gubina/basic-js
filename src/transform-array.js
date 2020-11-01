module.exports = function transform(arr) {
  console.log(arr.join());
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

    if (test[i] === myObj[1] && i !== 0) { // "--discard-prev"
      result.splice(i - 1, 1);
    }

    if (test[i] === myObj[2] && i !== test.length - 1) { // "--discard-next"
      test.splice(i + 1, 2);
    }

    if (test[i] === myObj[3] && i !== 0) { // "--double-prev"
      result.push(test[i - 1]);
    }

    if (test[i] === myObj[4] && i !== test.length - 1) { // "--double-next"
      result.push(test[i + 1]);
    }
  }
  return result;
};
