class Golfer {
  constructor(golfer) {
    this.name = golfer.name;
    this.handicap = golfer.handicap;
    this.frustration = 0;
    this.confidence = 0;
  };

  calculateAvg(par) {
    var avgScore = (this.handicap + par);
    return `I usually shoot a ${avgScore} on average.`
  };

  playRound(golfCourse) {
    if (golfCourse.difficulty === "hard") {
      return this.frustration = 500;
    } else if (golfCourse.difficulty === "moderate") {
      return this.frustration = 100;
    }
  };

  hitTheRange() {
    this.confidence += 10;
  };

  marvel(golfCourse) {
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`
  };

  whatYaShoot(par) {
    if (par > 0) {
      (this.frustration += 20)
      return `Doh!`;
    } else if (par === 0) {
      this.frustration -= 10;
      return `Booyah!`;
    } else {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`;
    }
  };

};

module.exports = Golfer;

// +=20, -=10 in whatYaShoot were determined based on the relationship of the golfer.frustration
// value in the test. The frustration counter wasn't resetting each time, so I
// had to zoom out and see the relationship between each shot. Not the relationship
// between the par and the value.
