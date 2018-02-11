var rows = 50;
var cols = 50;
var cells = [];

function setup() {
	createCanvas(500,500);
    generateGrid(); 
    console.log("Rows: " + cells.length);
    console.log("Cols: " + cells[0].length);
}

function draw() {
    background(51);
    drawGrid();
}

function generateGrid(){
    for(i = 0; i < rows; i++){
        var currRow = [];
        for(j = 0; j < cols; j++){
          currRow.push(new cell(0,i,j)); 
        }  
        cells.push(currRow); 
    }
}

function drawGrid(){
    strokeWeight(1);
    stroke(0);
    fill(255);
    for(i = 0; i<cells.length; i++){
        for(j = 0; j<cells[0].length; j++){
            var col = color(255);
            if(cells[i][j].state == 1){
                col = color(0);
            }
            fill(col);
            rect(i*height/rows, j*width/cols,height/rows, width/cols); 
        }
     }
}

function cell(state, x, y){
    this.state = state;
    this.x = x;
    this.y = y;
}
