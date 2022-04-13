class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ["Iris"],
    };
    this.disposition = "Good natured";
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust ++;
  };

  believe() {
    this.dust += 10;
  };

  makeDresses(flowers) {
    var flowerDresses = this.clothes.dresses.concat(flowers);
    this.clothes.dresses = flowerDresses;
  };

  becomeProvoked() {
    this.disposition = "Vengeful";
  };

  replaceInfant(infant) {
    if (this.disposition === "Vengeful") {
      infant.disposition = "Malicious";
      this.humanWards.push(infant);
    } if (this.humanWards.length > 2) {
      this.disposition = "Good natured";
    } else return infant;
  };

};





module.exports = Fairy;
