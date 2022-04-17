var Costume = require('../lib/costume');
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');





class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs =costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  };

  putCandyInBag(candy) {
    this.hasCandy = true;
    this.bag.fill();
    this.countCandies ++;
  };

  eat() {
    this.countCandies --;
    this.bag.candies.shift();
  };


};






module.exports = TrickOrTreater;
