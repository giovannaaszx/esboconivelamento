function setup () {
    createCanvas(800,800);
    background("pink");
    
  }
  
  function draw() {
    
    stroke("blue");
    fill("yellow");  
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }  