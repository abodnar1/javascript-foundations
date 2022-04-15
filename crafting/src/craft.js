var Material = require("../src/material.js");


class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  };

  completeCraft() {
    this.completed = true;
    return`All done! It looks great!`
  };

  calculateProjectTotal() {
    var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalCost += this.materials[i].calculateMaterialCost();
    } return totalCost;
  };

};

// because I'm trying to access the Material class in
// line 19 for the calculateMaterialCost method, I needed
// the var Material = require(...) at the top of this file
// otherwise it doesn't know where to seek out the method

// utilized a for loop because the Crafte materials property
// is being stored as an array


module.exports = Craft;
