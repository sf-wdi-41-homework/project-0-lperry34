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

function movePlayer1(position) {
     $(".active1").removeClass('active1').next().addClass('active1');
     players[1].position++;
     console.log(players[1].position);
 }
 $(document).keydown(function(keyPressed) {
     if (keyPressed.keyCode == 68) {
         movePlayer1();
     }

     if (players[1].position === 9) {
         alert("player 2 has won!")
     }

 });

});