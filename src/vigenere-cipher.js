// const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? reverse : direct;
  }

  encrypt(message, key) {
    if (arguments.length === 0) {
      throw new TypeError("Message & key not transferred")
    }

    if (!message || !key) {
      throw new TypeError("Message & key not transferred")
    }

    let messageUpperCase = message.toUpperCase();
    let keyUppercase = key.toUpperCase();

    let strFromKey;
    if (messageUpperCase.length > keyUppercase.length) {
      let index = Math.ceil(messageUpperCase.length / keyUppercase.length);
      strFromKey = keyUppercase.repeat(index).slice(0, messageUpperCase.length);
    }

    let testArr = messageUpperCase.split('');
    let keycCounter = 0;
    let result = '';

    for (let i = 0; i < testArr.length; i++) {
      if (messageUpperCase.charCodeAt(i) > 64 && messageUpperCase.charCodeAt(i) < 91) {
        let first = messageUpperCase.charCodeAt(i) - 65;
        let second = strFromKey.charCodeAt(keycCounter) - 65;
        let sum = first + second;
        let res = (sum % NUMBER_OF_LETTERS) + 65;
        result += String.fromCharCode(res);
        keycCounter++;
      } else {
        result += testArr[i];
      }
    }
    return result;
  }
  decrypt(encryptedMessage, key) {
    if (arguments.length === 0) {
      throw new TypeError("Message & key not transferred")
    }

    if (!encryptedMessage || !key) {
      throw new TypeError("Message & key not transferred")
    }
    // return this.type === direct ? str.toUpperCase() : str.reverse().toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
