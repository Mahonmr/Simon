var Simon = require('./../js/simon.js').Simon;

$(document).ready(function(){
  $('#new-game').submit(function(event){
    event.preventDefault();
    new_game = new Simon();
    new_game.says();
    $('#color').find('#' + new_game.simonList[0]).fadeOut(400).fadeIn(400);
  });

  $(".color").click(function() {
    new_game.clickColor(this.id);
    if (new_game.checkLength()) {
      if (new_game.compareList(new_game.simonList.length)) {
        new_game.says();
        $.each(new_game.simonList, function(i) {
          setTimeout(function () {
            $('#color').find('#' + new_game.simonList[i]).fadeOut(400).fadeIn(400);
          }, i * 400);
        });
      } else {
        $('#simonSays').append("You lost");
      }
    }
  });
});
