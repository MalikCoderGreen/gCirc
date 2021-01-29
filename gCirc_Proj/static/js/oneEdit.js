
// One Edit Game code. 

// Create canvas game area. 
var myGameArea = {
    canvas: document.createElement("canvas"), 

    start: function(){
        this.canvas.width = 250;
        this.canvas.height = 250;

        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
    }



}

function startGame(){
    myGameArea.start();
}