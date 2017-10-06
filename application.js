$(document).ready(function() {
  console.log("working");
      var players = [{
        position: 1,
    }, {
        position: 1,
    }];

// player 1

 function movePlayer(position) {
     $(".active").removeClass('active').next().addClass('active');
     players[0].position++;
     console.log(players[0].position);
 }

 $(document).keydown(function(keyPressed) {
     if (keyPressed.keyCode == 39) {
         movePlayer();
     }

     if (players[0].position === 9) {
         alert("player 1 has won!")
     }

 });


// player 2



});