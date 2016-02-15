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
