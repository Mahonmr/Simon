(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Simon = require('./../js/simon.js').Simon;
var says = require('./../js/simon.js').says;

$(document).ready(function(){
  $('#answer').submit(function(event){
    event.preventDefault();
    new_game.says();
      $('#simonSays').append(this.simonList);
  });

  $('#new-game').submit(function(event){
    event.preventDefault();
    new_game = new Simon();
    new_game.says();
  });
});

},{"./../js/simon.js":1}]},{},[2]);
