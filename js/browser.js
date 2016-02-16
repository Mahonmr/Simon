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
