var rows = 50;
var cols = 50;
var cells = [];
var i = 0;

function setup() {
	createCanvas(500,500);
    generateGrid(); 
    update();
    drawGrid();
}

function draw() {
    //background(51,100,0);
    setTimeout(update, 1000);
    setTimeout(drawGrid, 3000);
    setTimeout(printer, 3000);

}

function printer(){
    console.log(i);
    i++;
}

function generateGrid(){
    for(i = 0; i < rows; i++){
        var currRow = [];
        for(j = 0; j < cols; j++){
          currRow.push(new cell(0,i,j)); 
        }  
        cells.push(currRow); 
    }
    cells[0][0].state = 1;
    cells[0][1].state = 1;
    cells[0][2].state = 1;
    cells[1][0].state = 1;
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

function update(){
    var curCell;
    for(i = 0; i<rows; i++){
        for(j = 0; j<cols; j++){
            if(i<50){
            //console.log("CurrCell i: " + i + " j: " +j);
            currCell = cells[i][j]; 
            if(currCell.state == 1){
                switch(aliveNeighbors(currCell)){
                    case 0: // Underpopulation
                    case 1: // Underpopulation
                    case 4: // Overpopulation
                    case 5: // Overpopulation
                    case 6: // Overpopulation
                    case 7: // Overpopulation
                    case 8: // Overpopulation
                        currCell.state = 0;
                }
            }
            if(currCell.state == 0){
                if(aliveNeighbors(currCell) == 3){
                    currCell.state = 1;
                }
            }
            }
        }
    }
}

function aliveNeighbors(cell){
    var rtn = 0;
    minX = cell.x -1;
    maxX = cell.x +1;
    minY = cell.y -1;
    maxY = cell.y +1;
    if(minX < 0){ minX = 0;}
    if(maxX > rows-1){maxX = rows-1;}
    if(minY < 0){ minY = 0;}
    if(maxY > cols-1){maxY = cols - 1;}

    var count = 0;
    for(i = minX; i<=maxX; i++){
       for(j = minY; j<=maxY; j++){
           if(cell.x == i && cell.y == j){
              //console.log("Current Cell: " + i + ", " +j);
           }
           else{
              // console.log("X: " + cell.x + "Y: " + cell.y);
              count++;
             // console.log(count);
               if(cells[i][j].state == 1){
                   rtn+=1;
               }
           }
       }
    }
    //console.log("Neighbors: " + rtn);
    return rtn;
}

function cell(stat, x, y){
    this.state = 0;
    this.state = stat; // Alive = 1, Dead = 0
    this.x = x;
    this.y = y;
}
