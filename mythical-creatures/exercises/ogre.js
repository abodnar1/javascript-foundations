class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode ? ogre.abode : "Swamp";
    // if ogre.abode exists, return ogre.abode, else/otherwise return "swamp"
    // called a terinary expression
    // this.home = ogre.abode || "swamp"; (how I would write it now)
    this.swings = 0;
  }

  encounter(human) {
    human.encounterCounter ++;
    if (human.noticesOgre()) {
      this.swingAt();
      human.knockedOut = true;
    };

  };

  swingAt(human) {
    this.swings ++;
  };

  apologize(human) {
    human.knockedOut= false;
  };

};





module.exports = Ogre;
