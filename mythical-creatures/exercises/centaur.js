class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.crankyLevel = 0;
    this.standing = true;
    this.layingDown = false;
  };

  shootBow() {
    this.crankyLevel ++
    this.calculateCrank();
    if (this.cranky || this.layingDown) {
      return "NO!";
    } else if (this.standing){
      return "Twang!!!";
    }
  };


  run() {
    this.crankyLevel ++
    this.calculateCrank();
    if (this.cranky || this.layingDown) {
      return "NO!";
    } else {
      return `Clop clop clop clop!!!`;
    }
  };

  calculateCrank() {
    if (this.crankyLevel >= 3) {
      this.cranky = true;
    }
  };

  sleep() {
    if (this.standing) {
      return `NO!`;
    } else (this.layingDown)
      this.crankyLevel = 0;
      return `ZZZZ`;
  };

  layDown () {
    this.layingDown = true;
    this.standing = false;
    this.cranky = false;
  };

  standUp() {
    this.standing = true;
    this.layingDown = false;
  };

  drinkPotion() {
    this.cranky = false;
    if (this.layingDown === true) {
      return `Not while I\'m laying down!`;
    }
  };

};



// helper function is calculateCrank and serves as the checker
// need this.calculateCrank because it's within the class.
// Anytime you need to access a class's property, need this.




module.exports = Centaur;
