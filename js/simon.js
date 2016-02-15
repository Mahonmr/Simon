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

Simon.prototype.clickColor = function (color) {
  this.playerList.push(color);
  if(this.playerList.length === this.simonList.length) {
    Simon.compareList(playerList.length);
  }
};

Simon.prototype.compareList = function (length) {
  var i = 0;
  while (i =< length) {
    if (this.playerList[i] != this.simonList[i]) {
      return false;
    }
    i += 1;
  }
  return true;
}

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
