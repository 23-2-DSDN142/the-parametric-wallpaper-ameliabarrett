//your parameter variables go here!
let planetX  =160;
let rocketY = 60;


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
  background(24,47,102); // navy blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  

 stroke(253, 255, 199); //cream stars
  drawStar(40,40,10);

 

  fill(253, 255, 199) //cream
  noStroke();
  drawPlanet(planetX,75,50,50);
   

  translate(100, 55);
  fill(251,255,194);
  noStroke();
  beginShape(); //star2
  vertex(-5, 5); //a = 10, b=35, c=8 d=0
  vertex(0, 17.5);
  vertex(5, 5);
  vertex(17.5, 0);
  vertex(5, -4);
  vertex(0, -17.5);
  vertex(-5, -4);
  vertex(-17.5, 0);
  endShape();

}

function drawStar(x, y, s) { // star
  
  line(x, y - s, x, y + s);
  line(x - s, y, x + s, y);
  line(x - s, y -s, x + s, y + s);
 line(x + s, y - s, x -s, y + s);

 }
 
 function drawPlanet(x,y, l, w) { // planets
  ellipse(x,y,l,w); //175, 75, 50, 50

  fill(235, 240, 163);
  ellipse(planetX-13,65,15,12);
  ellipse(planetX+15,65,12,8);
  ellipse(planetX+12,78,11,7);
  ellipse(planetX,90,15,10);

 }
