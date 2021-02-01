
// One Edit Game code. 
var gameWords = {
    0: 'Affect',
    1: 'Effect',
    2: 'Access', 
    3: 'Assess',
    4: 'Altar', 
    5: 'Alter',
}

// Create squares for canvas. 
function makeSquares(){

   // Get game canvas area from HTML.
    var myGameArea = document.getElementById("myCanvas");
    var yPos1 = 0, yPos2 = 0; // Will be left square position and right square position.
    wordSquareList = [] // List to hold all word squares.
    
    // Loop to draw all squares to the game canvas. 
    for(var i = 0; i < 6; i++){
        
        // Squares on the left side of the canvas.
        if(i < 3){    

            var wordSquare = myGameArea.getContext("2d");
            wordSquare.beginPath();
            wordSquare.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            wordSquare.rect(0, yPos1, myGameArea.width / 2, myGameArea.height / 3);
            wordSquare.stroke();
            wordSquareList.push(wordSquare);
            yPos1 += 200;

    }
      // Squares on the right side of the canvas. 
      else if(i >= 3){
            
            var wordSquare = myGameArea.getContext("2d");
            wordSquare.beginPath();
            wordSquare.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            wordSquare.rect(200, yPos2, myGameArea.width / 2, myGameArea.height / 3);
            wordSquare.stroke();
            wordSquareList.push(wordSquare);
            yPos2 += 200;        
      }
      
    }


    // Set style for all words in list. 
    wordSquareList[0].font = 'italic 900 16px Russo One';
    
    // Loop that will print all words into the squares of the screen.
    var lPos = 100, rPos = 100;
    for(var i = 0; i < wordSquareList.length; i++){
        if(i < 3){
            wordSquareList[i].fillText(gameWords[i], 100, lPos);
            lPos += 200;
        }

        else{
            wordSquareList[i].fillText(gameWords[i], 300, rPos)
            rPos += 200;

        }

    }


}

// Hide start button after it is pressed. 
function hide(){
    var div = document.getElementById('gButtonContainer');
    div.style.display = 'none';

}

function startGame(){
    makeSquares();
}

