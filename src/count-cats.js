module.exports = function countCats(matrix) {
  let cats = 0;
  const reg = /^(\^{2})$/;

  if (Array.isArray(matrix)) {
    for (let i of matrix) {
      if (Array.isArray(i)) {
        for (let j of i) {
          if (isNaN(j) && reg.test(j)) {
            cats++;
          }
        }
      }
    }
  }
  return cats;
};
