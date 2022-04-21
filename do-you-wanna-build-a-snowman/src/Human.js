var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
  };

  gatherMaterials(material, qty) {
    this.materials[material] = this.materials[material] + qty;
  };

  buildASnowman() {
    var snowman = new Snowman(this.materials);
    snowman.canWearMagicHat();
    return snowman;
  };

  placeMagicHat() {
    var snowman = this.buildASnowman();
    if (snowman.magicHat) {
      return `Woah, this snowman is coming to life!`;
    } else {
      return `I guess I didn\'t build it correctly.`
    }
  };

};

module.exports = Human;
