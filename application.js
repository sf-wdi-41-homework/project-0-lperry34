$(document).ready(function() {

    console.log("JS is working");
    
    var players = [{
        position: 1,
    }, {
        position: 1,
    }];

    // player 1
    function movePlayer(position) {
        //adds CSS to the class active
        $(".active").removeClass('active').next().addClass('active') //adds the class to the next element
        players[0].position++; // increments the position
        console.log(players[0].position);
    }

    $(document).keydown(function(keyPressed) { // runs the function everytime the key is pressed
        if (keyPressed.keyCode == 39) {
            movePlayer();
        }

        if (players[0].position === 9) { //takes incremented position and creates win statement
            alert("player 1 has won!")
            $('#score').append("Player 1 Won! Player 2 Is Horrible");
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
        } // all the same thing for player 2

        if (players[1].position === 9) {
            alert("player 2 has won!");
            $('#score').append("Player 2 Won! Player 1 Is Horrible");
        }
    });

    $(document).keydown(function(wrongWay) {
        if (wrongWay.keyCode == 37) {
            alert("Wrong Way Fool");
        }
    });

    $(document).keydown(function(wrongWay2) {
        if (wrongWay2.keyCode == 65) {
            alert("Wrong Way Fool");
        }
    });


    //timer
    var count = 10;
    var go = "GO";
    var counter = setInterval(timer, 1000);

    function timer() {
        count = count - 1;
        if (count < 0) {
            clearInterval(counter);
            return;
        }

        document.getElementById("timer").innerHTML = count;
        if (count === 0) {
            document.getElementById("timer").innerHTML = go;
        }

    }

});