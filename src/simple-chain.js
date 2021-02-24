const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (this.chain === undefined && String(value) === undefined) {
      this.chain = `( )`;
      return this;
    } else if (this.chain === undefined && String(value) !== undefined) {
      this.chain = `( ${String(value)} )`;
      return this;
    } else if (this.chain !== undefined && String(value) === undefined) {
      this.chain = `${this.chain}~~( )`;
      return this;
    } else {
      this.chain = `${this.chain}~~( ${String(value)} )`;
      return this
    }
  },
  removeLink(position) {
    if (position < 1 || position > this.chain.split('~~').length) {
      delete this.chain;
      throw new Error('THROWN');
    }
    this.chain = this.chain.split('~~');
    this.chain.splice(position - 1, 1);
    this.chain = this.chain.join('~~');
    return this;
  },
  reverseChain() {
    if (this.chain === undefined) return this;
    this.chain = this.chain.split('~~');
    this.chain =  this.chain.reverse().join('~~');
    return this;
  },
  finishChain() {
    this.prevChain = this.chain;
    delete this.chain;
    return this.prevChain;re
  }
};

module.exports = chainMaker;
