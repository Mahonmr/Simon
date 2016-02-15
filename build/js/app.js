(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').Simon;

$(document).ready(function(){
  $('#answer').submit(function(event){
    event.preventDefault();

    $('#simonSays').append(this.playerList.result());
  });

  $('#new-game').submit(function(event){
    event.preventDefault();
    new_game = new Simon();
    new_game.says();
  });

  $(".color").click(function() {
    new_game.click_color(this.id)
      console.log(new_game)
  });
});

},{"./../js/simon.js":1}]},{},[2]);
