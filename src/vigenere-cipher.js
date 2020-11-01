const NUMBER_OF_LETTERS = 26;

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type === false ? 'reverse' : 'direct';
  }

  encrypt(message, key) {
    if (arguments.length === 0) {
      throw new TypeError("Message & key not transferred")
    }

    if (!message || !key) {
      throw new TypeError("Message & key not transferred")
    }

    let messageUpperCase = this.type === 'direct' ? message.toUpperCase() : message.toUpperCase().split('').reverse().join('');
    let keyUppercase = key.toUpperCase();

    let strFromKey;
    if (messageUpperCase.length > keyUppercase.length) {
      let index = Math.ceil(messageUpperCase.length / keyUppercase.length);
      strFromKey = keyUppercase.repeat(index).slice(0, messageUpperCase.length);
    } else if (messageUpperCase.length < keyUppercase.length) {
      strFromKey = keyUppercase.slice(0, messageUpperCase.length);
    } else {
      strFromKey = keyUppercase;
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

    let encryptedMessageUpperCase = this.type === 'direct' ? encryptedMessage.toUpperCase() : encryptedMessage.toUpperCase().split('').reverse().join('');
    let keyUppercase = key.toUpperCase();

    let strFromKey;
    if (encryptedMessageUpperCase.length > keyUppercase.length) {
      let index = Math.ceil(encryptedMessageUpperCase.length / keyUppercase.length);
      strFromKey = keyUppercase.repeat(index).slice(0, encryptedMessageUpperCase.length);
    } else if (encryptedMessageUpperCase.length < keyUppercase.length) {
      strFromKey = keyUppercase.slice(0, encryptedMessageUpperCase.length);
    } else {
      strFromKey = keyUppercase;
    }

    let testArr = encryptedMessageUpperCase.split('');
    let keycCounter = 0;
    let result = '';

    for (let i = 0; i < testArr.length; i++) {
      if (encryptedMessageUpperCase.charCodeAt(i) > 64 && encryptedMessageUpperCase.charCodeAt(i) < 91) {
        let first = encryptedMessageUpperCase.charCodeAt(i) - 65;
        let second = strFromKey.charCodeAt(keycCounter) - 65;
        let sum = first + NUMBER_OF_LETTERS - second;
        let res = (sum % NUMBER_OF_LETTERS) + 65;
        result += String.fromCharCode(res);
        keycCounter++;
      } else {
        result += testArr[i];
      }
    }

    return result;
  }
}

module.exports = VigenereCipheringMachine;
