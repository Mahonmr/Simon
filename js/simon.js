var Simon = function() {
  this.colors = ["red", "yellow", "blue", "green"];
  this.simonList = [];
  this.playerList = [];
};

Simon.prototype.says = function() {
  var color;
  color = this.colors[Math.floor(Math.random()*this.colors.length)];
  this.simonList.push(color);
  return this.simonList;
};

Simon.prototype.clickColor = function(color) {
  this.playerList.push(color);
};

Simon.prototype.checkLength = function() {
  return (this.playerList.length === this.simonList.length);
};

Simon.prototype.compareList = function (length) {
  for(var i = 0; i <= length; i += 1) {
    if (this.playerList[i] != this.simonList[i]) {
      return false;
    }
  }
  this.playerList = [];
  return true;
};

exports.Simon = Simon;
