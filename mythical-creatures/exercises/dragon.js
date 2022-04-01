class Dragon {
  constructor(dragName, dragRider) {
    this.name = dragName;
    this.rider = dragRider;
    this.hungry = true;
    this.eatCount = 0;
  }

  greet() {
    return `Hi, ${this.rider}!`
  };

  eat() {
    this.eatCount ++
    if (this.eatCount === 3) {
      this.hungry = false
    }
  };
};

// want to increment eatCount to see when we hit 3 eats
// once 3 are met, return this.hungry = false

// hungry does not need to be a parameter because it is
// hard coded with "true"

// in eat function, we don't need "return" on line 16
// because it's not actually returning anything, it's just
// resolving down to the value false. Whereas line 10 is actually
// returning a string. Would need a return statement on line 17 if
// I wanted the dragon to say "I'm full."








module.exports = Dragon;
