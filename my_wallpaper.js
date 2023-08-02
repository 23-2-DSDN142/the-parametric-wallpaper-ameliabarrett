//your parameter variables go here!
let planetX  =180; // 150
let planetY = 150; // 150
let bigPlanetX = 190; // 190
let bigPlanetY = 70;  // 70
let ringPlanetX = 220; // 220
let ringPlanetY = 40; // 40


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 20;
}

function wallpaper_background() {
  background(24,47,102); // navy blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  
 stroke(253, 255, 199); //cream stars
  drawStar(35,40,10);
  drawStar(70,20,5);
  drawStar(20,75,5);
  drawStar(260,40,10);
  drawStar(15,165,4);

  fill(253, 255, 199) //cream
  noStroke();
  drawPlanet(planetX,planetY,50,50);

  fill(242, 201, 162); //pale orangy
  noStroke();
  drawLargePlanet(bigPlanetX, bigPlanetY, 80, 80);



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
 
 fill(255,255,0); //yellow
 ellipse(100,80,40,40); //circle outline
 fill(42,202,234); // blue
 ellipse(100,80,30,30); //window
   

  translate(140, 30);
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

  translate(-110, 100);
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

  fill(185, 240, 215); //teal
  noStroke();
  rotate(-10);
  drawRingPlanet(ringPlanetX,ringPlanetY,65,65); // ringed planet

}

function drawStar(x, y, s) { // star
  
  line(x, y - s, x, y + s);
  line(x - s, y, x + s, y);
  line(x - s, y -s, x + s, y + s);
 line(x + s, y - s, x -s, y + s);

 }
 
 function drawPlanet(x,y, l, w) { // small yellow planet
  ellipse(x,y,l,w); //175, 75, 50, 50

  fill(235, 240, 163);
  ellipse(planetX-13,planetY-10,15,12);
  ellipse(planetX+15,planetY-10,12,8);
  ellipse(planetX+12,planetY+3,11,7);
  ellipse(planetX,planetY+15,15,10);

 }

 function drawLargePlanet(x,y, l, w) { // big planet
  ellipse(x,y,l,w); // 190, 70, 80, 80

  stroke(245, 180, 118); //darker orangy
  strokeWeight(3);
 line(bigPlanetX, bigPlanetY-20, bigPlanetX+32, bigPlanetY-20,);
 line(bigPlanetX-37, bigPlanetY-10, bigPlanetX+5, bigPlanetY-10);
 line(bigPlanetX-25, bigPlanetY, bigPlanetX+27, bigPlanetY);
 line(bigPlanetX-37, bigPlanetY+10, bigPlanetX-10, bigPlanetY+10,);
 line(bigPlanetX-20, bigPlanetY+20,bigPlanetX+20, bigPlanetY+20,);
 line(bigPlanetX, bigPlanetY+30, bigPlanetX+24, bigPlanetY+30,);

 }

 function drawRingPlanet(x,y, l, w) { // small yellow planet
  ellipse(x,y,l,w); //220, 40, 65, 65

  fill(127, 176, 154); // dark teal
  ellipse(ringPlanetX,ringPlanetY,87,10); 
 
}