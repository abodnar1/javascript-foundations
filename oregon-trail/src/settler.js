class Settler {
  constructor(settler) {
    this.name = settler.name;
    this.age = settler.age;
    this.nationality = settler.nationality || "unknown";
    this.status = "healthy";
    this.ailments = [];
  };

  experienceDistress(injury) {
    this.ailments.push(injury);

    if (this.ailments.length === 1) {
      this.status = "fair";
    } else if (this.ailments.length === 2) {
      this.status = "poor";
    } else if (this.ailments.length === 3) {
      this.status = "dead";
    } else if (this.ailments.length > 3) {
      this.ailments.pop(injury);
      this.status = "dead";
    }
  };

  heal() {
    if (this.status === "poor") {
      this.ailments = [];
      this.status = "healthy";
    } else if (this.status === "dead") {
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`
    }
  };

};

module.exports = Settler;
