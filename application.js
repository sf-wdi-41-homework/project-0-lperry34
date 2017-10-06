$(document).ready(function() {
  console.log("working");
    var winPoint = 12;
    var players = [{
        position: 0,
        keycode: 39,
        css_locator: '#player1'
    }, {
        position: 0,
        keycode: 68,
        css_locator: '#player2'
    }];


$(document).keydown(function(keyPressed) {
   if (keyPressed.keyCode == 39) {
     $("#box1").css("background-image","url(yoshiDude.png)");
     players[0].position++;
     console.log(players[0].position);
   }
   if(players[0].position === 2){
    $("#box2").css("background-image","url(yoshiDude.png)");
    $("#box1").css("background-image","url()");
}



  });

});