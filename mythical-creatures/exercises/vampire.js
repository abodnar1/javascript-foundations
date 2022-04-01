class Vampire {
  constructor (name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  };

  drink() {
    this.thirsty = false
    // console.log(this);
    if (this.ouncesDrank === 50) {
      return "I\'m too full to drink anymore!"
    } else {
      this.ouncesDrank += 10
    }
  };
  // simply reassign the property of this.thirsty to false
  // += means take the starting datatype (0 in this case) and add
  // whatever number to it each time the function is invoked
};

// did not list thirsty as a parameter because
// it is hard coded as true

// i want the function to see that the vampire is thirsty
// && if they have a drink, then they are no longer isThirsty

// practice using terms of art for the assessments

module.exports = Vampire;
