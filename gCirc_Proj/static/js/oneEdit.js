
// One Edit Game code. 

// Global object to store lists including one question with possible choices.
// Position [i][0] will always be the question of the set. 
// Position [i][7] will hold the value of the true answer. 
var gameSet = {
    0: ["Who won the 2020 NBA Finals?", 
    'Nuggets', 
    'Heat',
    'Celtics', 
    'Lakers',
    'Rockets', 
    'Raptors', 
    'Lakers'
    ],

    1: ["What was the name of this years major virus?",
        'MARS-CoV-20', 
        'SANS-CoV-19', 
        'SARS-CoV-2',
        'Sars-COV-16',
        'CoronaLite19',
        'Covid-190', 
        'SARS-CoV-2'
        ] 

 
}

// Global game canvas variable. 
var myGameArea = document.getElementById("myCanvas");

// Choose question set from global: gameSet object.
var qSet = Math.floor(Math.random() * 2);

/*
Function: Make game squares and draw them onto canvas 'myGameArea'.
Params: None
Return: None
*/
function makeSquares(){
  
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
    wordSquareList[0].font = 'italic 900 22px Russo One';
    wordSquareList[0].textAlign = 'center';
    wordSquareList[0].fillStyle = 'white';


    // Loop that will print all words into the game squares of the screen.
    var lPos = 100, rPos = 100;
    for(var i = 0; i < wordSquareList.length; i++){
        
        if(i < 3){
            wordSquareList[i].fillText(gameSet[qSet][i+1], 100, lPos);
            wordSquareList[i].textAlign = 'center';
            wordSquareList[i].fillStyle = 'white';
            lPos += 200;
        }

        else{
            wordSquareList[i].fillText(gameSet[qSet][i+1], 300, rPos);
            wordSquareList[i].textAlign = 'center';
            wordSquareList[i].fillStyle = 'white';
            rPos += 200;
        }

    }

    /*
     Function: Get coordinates of mouse click by user.
     params: Game canvas, event
     return: none
     */
    function getMousePosition(canvas, event) { 
        let rect = canvas.getBoundingClientRect(); 
        let x = event.clientX - rect.left; 
        let y = event.clientY - rect.top; 

        if( x <= 199 && y < 200){
            alert("You touched The first square; word is:  " + wordSquareList[0]);
        } 

        else{
            alert("Some other square, x pos: " + x);
        }
    }

    
myGameArea.addEventListener("mousedown", function(e){
    getMousePosition(myGameArea, e);
});

}

/*
Function: Show game question to screen.
Params: None
Return: None
*/
function displayQuestion(){
    var question = document.getElementById("gQuestion");
    question.innerText = 'Q: ' + gameSet[qSet][0];
    //document.body.appendChild(question);
}

/*
Function: Hide start button after it is pressed.
Params: None
Return: None
*/
function hide(){
    var div = document.getElementById('gButtonContainer');
    div.style.display = 'none';

}

/*
Function: Start game and fire makeSquares() func.
Params: None
Return: None
*/
function startGame(){
    makeSquares();
    displayQuestion();
}




