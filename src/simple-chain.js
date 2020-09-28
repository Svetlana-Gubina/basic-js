const SEPARATOR = "~~";

const chainMaker = {
  getLength() {
    let test = arguments[0].toString() || "";
    if (test.includes(SEPARATOR)) {
      return test.split("~~").length;
    }
    return false;
  },
  addLink(value) {
    if (this.chain) {
      this.chain = `${this.chain}~~( ${value} )`;
    } else {
      this.chain = `( ${value} )`;
    }
    return this;
  },
  removeLink(position) {
    let chainArr;
    if (this.chain) {
      chainArr = this.chain.split("~~") || this.chain.split("");
    }

    if (
      isNaN(position) ||
      !Number.isInteger(position) ||
      position < 0 ||
      position > chainArr.length
    ) {
      throw new TypeError("Position not exist");
    }

    chainArr.splice(position - 1, 1);
    this.chain = chainArr.join("~~") || "";
    return this;
  },
  reverseChain() {
    if (this.chain && this.chain.includes(SEPARATOR)) {
      this.chain = this.chain.split("~~").reverse().join("~~");
    } else {
      this.chain = this.chain || "";
    }
    return this;
  },
  finishChain() {
    let result;
    if (this.chain) {
      result = this.chain;
    }
    this.chain = "";
    return result;
  },
};

module.exports = chainMaker;
