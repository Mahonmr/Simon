(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  if(this.playerList.length === this.simonList.length) {
    test = this.compareList(this.playerList.length)
    if(test) {
      this.playerList = [];
       this.says();
    } else {
      return false;
    }
  }
};

Simon.prototype.compareList = function (length) {
  var i = 0;
  while (i <= length) {
    if (this.playerList[i] != this.simonList[i]) {
      return false;
    }
    i += 1;
  }
  return true;
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

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').Simon;

$(document).ready(function(){
  $('#new-game').submit(function(event){
    event.preventDefault();
    new_game = new Simon();
    new_game.says();
    console.log(new_game)
  });

  $(".color").click(function() {
    new_game.clickColor(this.id);
    $.each(new_game.simonList, function(index, value) {
      $('#simonSays').append(value);
    });
  });
});

},{"./../js/simon.js":1}]},{},[2]);
