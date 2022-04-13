const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || "Winterfell";
    this.safe = false;
  };

  sayHouseWords() {
    if (!this.safe) {
      return `Winter is Coming`;
    } else {
      this.safe;
      return `The North Remembers`;
    }
  };

  callDirewolf(name, home) {
    var newDirewolf = new Direwolf(name, home);
      newDirewolf.protect(this);
      return newDirewolf;
  };

};


module.exports = Stark;
