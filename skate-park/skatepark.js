class SkatePark {
  constructor(skatepark) {
    this.name = skatepark.name;
    this.yearFounded = skatepark.year;
    this.style = skatepark.type;
    this.features = skatepark.features;
    this.isPrivate = skatepark.isPrivate || false;
    this.cost = skatepark.price || 0;
    this.occupants = [];
  };

  admit(skater) {
    if (!this.isPrivate && this.occupants.length < 3) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money = (skater.money - this.cost);
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (skater.money < this.cost) {
      return `Sorry, you don't have enough money.`
    } else if (this.occupants.length = 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
  };


};

module.exports = SkatePark;
