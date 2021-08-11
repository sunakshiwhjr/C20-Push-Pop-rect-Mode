
function setup()
{
   createCanvas(400, 400);

}


function draw()
{
    background("yellow");
    //show rectmode first and then push & pop

    rectMode(CENTER);

    push();

    fill("Red");
    rect(100, 100, 40, 70);

    pop();


    fill("Blue");
    rect(200, 200, 60, 40);
  

    text(mouseX + "," + mouseY, mouseX, mouseY);

}
