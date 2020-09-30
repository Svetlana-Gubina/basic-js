module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    if (Array.isArray(arr) && arr.length === 0) {
      return 1;
    }
    return Array.isArray(arr)
      ? 1 + Math.max(...arr.map((i) => this.calculateDepth(i)))
      : 1;
  }
};
