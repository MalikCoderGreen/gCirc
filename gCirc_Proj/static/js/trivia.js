
// trivia.js that contains all code logic for game.


/*** Global object to store lists including one question with possible choices. ***/
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
        ],

    2: ["What netflix show was an obssession by most people during 2020?",
        'Lion Master',
        'Cake Wars', 
        'Tiger King', 
        'Birdbox', 
        'Cobra Kai', 
        'Away',
        'Tiger King',
    ],

    3: ["What was the nickname for the deadly insect that made it's way to the US?", 
        'Killer bugs', 
        'deadly pests', 
        'Murder wasps', 
        'Murder hornets',
        'Super Stings', 
        'Murder bees', 
        'Murder hornets', 
    ],

};

/*
* GLOBAL VARIABLES USED FOR GAME.
*/

// Game canvas & score variables. 
var myGameArea = document.getElementById("myCanvas");
var gameScore = 0;
var gScoreTag = document.getElementById("gScore");

// Choose question set from global: gameSet object.
var qSet = Math.floor(Math.random() * Object.keys(gameSet).length);

// Questions already shown. 
var qShown = [];

// Lists: hold all word squares and question sets. 
var wordSquareList = []; 
var qSetWords = []; 


/*
Function: Make game squares and draw them onto canvas 'myGameArea'.
Params: None
Return: None
*/
function makeSquares(){
  
    var yPos1 = 0, yPos2 = 0; // Will be left square position and right square position.
    squareRects = []; 
    
    // Loop: Draw all squares to the game canvas. 
    for(var i = 0; i < 6; i++){
        
        // Squares on the left side of the canvas.
        if(i < 3){    

            var wordSquare = myGameArea.getContext("2d");
            wordSquare.beginPath();
            wordSquare.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            wordSquare.rect(0, yPos1, myGameArea.width / 2, myGameArea.height / 3);
            squareRects.push([0, yPos1]);

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
            squareRects.push([200, yPos2]);

            wordSquare.stroke();
            wordSquareList.push(wordSquare);
            yPos2 += 200;        
      }
      
    }


    // Set style for all words in list. 
    wordSquareList[0].font = 'italic 900 22px Russo One';
    wordSquareList[0].textAlign = 'center';
    wordSquareList[0].fillStyle = 'blue';


    
    var lPos = 100, rPos = 100;

    // Loop: Will print all words into the game squares of the screen.
    for(var i = 0; i < wordSquareList.length; i++){
        
        if(i < 3){
            wordSquareList[i].fillText(gameSet[qSet][i+1], 100, lPos);
            qSetWords.push(gameSet[qSet][i+1]);

            wordSquareList[i].textAlign = 'center';
            wordSquareList[i].fillStyle = 'blue';

            lPos += 200;
        }

        else{
            wordSquareList[i].fillText(gameSet[qSet][i+1], 300, rPos);
            qSetWords.push(gameSet[qSet][i+1]);
            wordSquareList[i].textAlign = 'center';
            wordSquareList[i].fillStyle = 'blue';
            rPos += 200;
        }

    }
}
/*
Function: Paints the game square green if correct; red if wrong.
Params: None
Return: None
*/
function paintSquares(){

    for(var i = 0; i < wordSquareList.length; i++){
        if(qSetWords[i] == gameSet[qSet][7]){
            wordSquareList[i].fillStyle = 'rgba(124,252,0,0.5)';
            wordSquareList[i].fillRect(squareRects[i][0], squareRects[i][1], myGameArea.width / 2, myGameArea.height / 3);
        }
        else{
            wordSquareList[i].fillStyle = 'rgba(255,99,71,0.5)';
            wordSquareList[i].fillRect(squareRects[i][0], squareRects[i][1], myGameArea.width / 2, myGameArea.height / 3);
        }
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

    // Loop: Find out which sqaure was touched and if the answer is correct. 
    for(var i = 0; i < wordSquareList.length; i++){
        if( (squareRects[i][0] < x && x < squareRects[i][0] + 200) && (squareRects[i][1] < y && squareRects[i][1] + 200 > y)){

            if(qSetWords[i] == gameSet[qSet][7]){
                alert("The answer is correct!");
                gameScore += 1;
                gScoreTag.innerText = `SCORE: ${gameScore}/${Object.keys(gameSet).length}`;
                paintSquares();
                
                }

                else{
                    alert("Wrong answer... The correct answer was " + gameSet[qSet][7]);
                    paintSquares();
                }           
            }
        }
        showNext();
}

// Listen for mouse click on canvas. 
myGameArea.addEventListener("mousedown", function(e){
    getMousePosition(myGameArea, e);
});



/*
Function: Show game question to screen.
Params: None
Return: None
*/
function displayQuestion(){
    var question = document.getElementById("gQuestion");
    question.innerText = 'Q: ' + gameSet[qSet][0];
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
Function: Shows next button after answer is pressed.
Params: None
Return: None
*/
function showNext(){
    var div = document.getElementById('nextBtn');
    div.style.display = 'block';
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



/*
Function: Refresh the game board after user presses next button.
Params: None
Return: None
*/
function refreshBoard(){
    qShown.push(qSet); // Add current question to shown already.

    // User has answered all questions; page will reload. 
    if(qShown.length === Object.keys(gameSet).length){
        alert("Those are all the questions!\nYour score: " + gScoreTag.innerText);
        location.reload();
    }
   
    // Keep re-rolling until new question set. 
    qSet = Math.floor(Math.random() * Object.keys(gameSet).length);
    while(qShown.includes(qSet) && qShown.length != Object.keys(gameSet).length){
        qSet = Math.floor(Math.random() * Object.keys(gameSet).length);
    }


 
    // Reset game data. 
    qSetWords = [];  
    wordSquareList = [];
   

    // Clear canvas. 
    var ctx = myGameArea.getContext('2d');
    ctx.clearRect(0, 0, myGameArea.width, myGameArea.height);

    makeSquares();
    displayQuestion();
}

