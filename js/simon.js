exports.Simon = function() {
  this.colors = ["red", "yellow", "blue", "green"];
  this.simonList = [];
};

exports.Simon.prototype.says = function () {
  var color;
  color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.simonList.push(color);
  return this.simonList;
};

// exports.Simon.prototype.result  = function (answer) {
//   if (answer) === this.simonList {
//     return (this.simonList.says);
//   } else {
//     return("You Lose.");
//   }
// };
