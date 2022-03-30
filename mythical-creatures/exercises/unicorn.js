// class Unicorn {
//   constructor(name, color) {
//     this.name = name;
//     if (color === undefined) {
//       this.color = "white";
//   } else {
//     this.color = color;
//     }
//   }
//
//   isWhite() {
//     if(this.color != "white") {
//       return false;
//     }
//   }
//
//   says(message) {
//     return `**;* ${message} *;**`;
//   }
// };



//REFACTORED:

class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }

  isWhite() {
    if (this.color != "white") {
      return false;
    }
  }
  says(message) {
      return `**;* ${message} *;**`;
  }
};

module.exports = Unicorn;


// class Unicorn {
//   constructor() {
//
//   }
// }


// when you see new if means you're making a new instance
