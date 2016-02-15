var Simon = function() {
  this.colors = ["red", "yellow", "blue", "green"];
  this.simonList = [];
  this.playerList = [];
};

Simon.prototype.says = function () {
  var color;
  color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.simonList.push(color);
  return this.simonList;
};

Simon.prototype.click_color = function (color) {
  this.playerList.push(color);
};

Simon.prototype.result  = function (answer) {
  if (playerList === simonList) {
    return true;
  } else {
    return false;
  }
};

// function animate(sequence) {
// 	var i = 0;
// 	var interval = setInterval(function() {
// 		lightUp(sequence[i]);
//
//         i++;
//         if (i >= sequence.length) {
// 			clearInterval(interval);
//         }
//    }, 600);
// }


exports.Simon = Simon;
