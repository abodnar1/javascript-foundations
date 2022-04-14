class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
  };

  useMaterial(amtUsed) {
    var amtDiff = (this.amount % amtUsed);

    if (this.amount < amtUsed) {
      return `You don\'t have enough ${this.name}! Try using ${amtDiff} ${this.units} or less.`
    } else {
      this.amount = (this.amount - amtUsed);
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
  };

  calculateMaterialCost() {
    return (this.amount * this.price);
  };

};









module.exports = Material;
