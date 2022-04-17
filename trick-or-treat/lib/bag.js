var Candy = require('../lib/candy');

class Bag {
  constructor () {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  };

  fill(candy) {
    this.count ++;
    this.empty = false;
    this.candies.push(candy);
  };

  contains(candy) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candy) {
        return true;
      } else {
        return false;
      }
    }
  };

};





module.exports = Bag;
