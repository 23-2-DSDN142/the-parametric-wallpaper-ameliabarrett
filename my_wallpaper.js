//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(53,53,53); //black background
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
  fill(255,169,1); //yellow fire underneath
  stroke(255,127,1); //orange fire outline
  strokeWeight(5);
  beginShape();
  curveVertex(100,185);
  curveVertex(100,185); //start
  curveVertex(97,178);
  curveVertex(90,168);
  curveVertex(90,160);
  curveVertex(100,153); //middle
  curveVertex(110,160);
  curveVertex(110,168);
  curveVertex(103,178);
  curveVertex(100,185); //end
  curveVertex(100,185);
  endShape();

fill(73,171,129); //darker green rocket body
 noStroke();
 beginShape();
 curveVertex(75,50);
 curveVertex(75,50);
 curveVertex(70,70);
 curveVertex(78,140);
 curveVertex(122,140);
 curveVertex(130,70);
 curveVertex(125,50);
 curveVertex(125,50);
 endShape();

 fill(254,46,46); //brigher red rocket top/wings
 noStroke();
 triangle(100,20,75,50,125,50); //top
 triangle(72,115,60,157,75,150); //left wing
 triangle(128,115, 140, 157, 125,150); // right wing
 triangle (85,120,100,161,115,120); // middle wing

 fill(254,46,46); //brigher red rocket top/wings
 noStroke();
 beginShape();
 curveVertex(60,157);
 curveVertex(60,157);
 curveVertex(70,120);
 curveVertex(72,115);
 curveVertex(72,115);
 endShape();

 fill(255,255,0); //yellow
 ellipse(100,80,40,40); //circle outline

 fill(42,202,234); // blue
 ellipse(100,80,30,30); //window




}


