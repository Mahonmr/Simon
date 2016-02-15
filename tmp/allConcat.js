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

// when # of user clicks = length of simonList -->
// if match --> if playerList === simonList;
// clear playerList --> playerList = [];
// add a new random color to simonList array --> simonList.says();

if (playerList === simonList) {
  var playerList = [];
  return simonList.says();
} else {
  return ("Simon says FAIL");
}
