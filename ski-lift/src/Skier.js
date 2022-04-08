class Skier {
  constructor(name, liftTicket) {
    this.name = name;
    this.hasLiftTicket = liftTicket;
    this.skillLevel = 1;
    this.nextSlope = "green circle";
  };

  takeLesson() {
    this.skillLevel ++;
  };

  pickSlope() {
    if (this.skillLevel > 4) {
      this.nextSlope = "black diamond";
    } else {
      this.nextSlope = "blue square";
    }
  };

};

module.exports = Skier;















































//
//
// constructor(name, liftTicket) {
//   this.name = name;
//   this.hasLiftTicket = liftTicket;
//   this.skillLevel = 1;
//   this.nextSlope = 'green circle';
// }
//
// pickSlope() {
//
//   // if skill level is 5 or more, then black diamond.
//   if (this.skillLevel > 4) {
//     this.nextSlope = 'black diamond';
//   }else if (this.skillLevel > 2 ) {
//     this.nextSlope = 'blue square';
//   }
// }
//
// takeLesson() {
//   this.skillLevel++;
// }
// }
