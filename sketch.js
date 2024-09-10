//Malik Morgan: experiment with terrain generation using perlins noise 3d shapes and p5`s WEBGL
//https://p5js.org/reference/#/p5/noise
//May 4, 2024

var ww = window.innerWidth;
var wh = window.innerHeight;  
let size = 20;
let cols,rows;
let w = 4000;
let h = 2000;
let terrain = [];
let flying = 0;


function setup() {
    canvas =createCanvas(ww, wh, WEBGL);
     cols = 70;
     rows = 70;
     console.log(cols,rows);
 
     
}

function draw() {
    flying -= 0.1;
    let mult = 80;
    let inc = 0.1889;
    let yoff = flying;
    for(let y = 0; y < rows; y++) {
        let xoff = 0;
        terrain[y] = [];
        for(let x = 0; x < cols; x++) {
            terrain[y][x] = map(noise(xoff, yoff), 0, 1, -mult, mult);
            xoff += inc;
        }
        yoff += inc;
    }
    
    background(0);
    noFill();
    colorMode(HSB);
    stroke(255, 204, 100);
    //stroke('green');
    strokeWeight(1);
    translate(-width/2-250, -height/3);
    rotateX(PI/3);
    for (let i = 0; i < rows-1; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let m = 0; m < cols; m++) {   
    // Add vertices.
    vertex((i+1)*size, m*size, terrain[m][i+1]);
    vertex(i*size, m*size, terrain[m][i]);
    }
    // Stop drawing the shape.
    endShape();
    }
    orbitControl();

}

window.onresize = function() {
    // assigns new values for width and height variables
    draw();
    ww = window.innerWidth;
    wh = window.innerHeight;  
    canvas.size(ww,wh);
  }



// This is code that make the terrain 3d
  //angleMode(DEGREES);
  //background(0);
  //adds mouse movement to the terrain
  //let x = map(mouseX, 0, 360, 0, width);
  //rotateX(-20);
  //rotateY(45);
  //for (let i = 0; i < rows-1; i++) {
  //for (let m = 0; m < cols; m++) {   
      //push();
      // translate(i * size-50, 0, m * size - 500);
      //create the boxes
      //rect(i*size-300,m*size-300, size, size);
      //fill(0);
      //add the ellips to the boxes
      //ellipse(i*size-300, m*size-300, 10, 10);
      //pop();
      //}
    //}
