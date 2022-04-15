class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  };

  noticesOgre() {
    if (this.encounterCounter === 3 || this.encounterCounter === 6) {
      return true;
    } else {
      return false;
    };
  };

};



module.exports = Human;





// let response = (this.encounterCounter % 3 === 0) ? true : false;
// return response;
// "response" is only scoped to noticesOgre because we used let
