class Hobbit {
  constructor(name) {
    this.name = name.name;
    // need to do name.name because lines 15 & 16 are
    // passing objects as the argument
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }

  celebrateBirthday() {
    this.age ++
    if (this.age >= 101) {
        this.old = true;
    } else if
        (this.age >= 33) {
        this.adult = true;
    } else {
        this.adult
      }
    };
    // need to do a else if because we have 3

  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return `Here is the ring!`
    } else {
      return `You can\'t have it!`
    }
  };

};

  // if name is frodo, then return this.hasRing true
  // if
// name === Frodo
// hasRing needs to be true
// return string "Here is the ring!"

// name !== Frodo,
// hasRing needs to be false
// return strings "you can\'t have it!"


module.exports = Hobbit;
