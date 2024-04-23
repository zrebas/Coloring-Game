// [processing-p5-convert] import java.util.*;
//CLASSES
class Button {
    constructor(_x, _y, _w, c, _s) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.s = _s;
        this.fillColor = c;
    }
    display() {}
    isClicked(mousex, mousey) {
        return true;
    }
}
class rectButton extends Button {
    constructor(_x, _y, _w, _h, c, s, e, _text) {
        super(_x, _y, _w, c, s);
        this.h = _h;
        this.doErase = e;
        this.text = _text;
    }
    display() {
        fill(this.fillColor);
        stroke(this.s);
        rect(this.x, this.y, this.w, this.h);
        fill(turq);
        noStroke();
        textSize(25);
        text(this.text, this.x + 15, this.y + 32);
    }
    isClicked(mousex, mousey) {
        if (
            mousex > this.x &&
            mousex < this.x + this.w &&
            mousey > this.y &&
            mousey < this.y + this.h
        ) {
            if (this.doErase == 1) {
                drawColor = whitee;
                eraser = true;
            } else {
                eraser = false;
                drawColor = blackk;
            }
            return true;
        }
        return false;
    }
}



class saveButton extends Button {
    constructor(_x, _y, _w, _h, c, s, e, _text) {
        super(_x, _y, _w, c, s);
        this.h = _h;
        this.text = _text;
    }
    display() {
        fill(this.fillColor);
        stroke(this.s);
        strokeWeight(7);
        rect(this.x, this.y, this.w, this.h);
        fill(turq);
        noStroke();
        textSize(25);
        text(this.text, this.x + 15, this.y + 32);
    }
    isClicked(mousex, mousey) {
        if (
            mousex > this.x &&
            mousex < this.x + this.w &&
            mousey > this.y &&
            mousey < this.y + this.h
        ) {
          if(time > 50){
            let img = get(27,27, 850, 490);
            img.save('tortoise_icon.png');
            time = 0;
          }
            return true;
        }
        return false;
    }
}

class circleButton extends Button {
    constructor(_x, _y, _w, c, s) {
        super(_x, _y, _w, c, s);
        this.radius = this.w / 2;
    }
    display() {
        fill(this.fillColor);
        stroke(this.s);
        ellipse(this.x, this.y, this.w, this.w);
    }
    isClicked(mousex, mousey) {
        if (
            mousex > this.x - this.radius &&
            mousex < this.x + this.radius &&
            mousey > this.y - this.radius &&
            mousey < this.y + this.radius
        ) {
            if (eraser == false) {
                drawColor = this.fillColor;
            }
            return true;
        }
        return false;
    }
}
class sliderButton extends Button {
    constructor(_x, _y, _w, c, _s) {
        super(_x, _y, _w, c, _s);
    }
    display() {
        fill(this.fillColor);
        stroke("#73C3BC");
        strokeWeight(5);
        rect(this.x, this.y - 15, this.w / 10, this.w / 10 + 10);
    }
    isClicked(mousex, mousey) {
        if (
            mousex > this.x &&
            mousex < this.x + this.w / 10 &&
            mousey > this.y - 10 &&
            mousey < this.y + this.w / 10 + 10
        ) {
            if (pmouseX > mouseX && this.x > 360) {
                this.x -= 10;
                drawThickness -= 2;
            } else if (this.x < 540) {
                this.x += 10;
                drawThickness += 2;
            }
            return true;
        }
        return false;
    }
    move() {}
}
class Line {
    constructor(_x1, _y1, _x2, _y2, _c, stroke) {
        this.x1 = _x1;
        this.y1 = _y1;
        this.x2 = _x2;
        this.y2 = _y2;
        this.c = _c;
        this.s = stroke;
    }
    display() {
        stroke(this.c);
        strokeWeight(this.s);
        line(this.x1, this.y1, this.x2, this.y2);
    }
} 
//VARIABLES
let whitee;
let bluee;
let turq;
let pinkk;
let yelloww;
let redd;
let blackk;
let greenn;
let magg;
let limee; 
let darkpink;
let time;
let tortoise;
let buttonList = [];
let lineList =[];
let drawColor;
let eraser = false;
let drawThickness = 2;
let doBreak = true; //METHODS
function border() {
    stroke(turq);
    strokeWeight(7);
    line(20, (height * 3) / 4, width - 20, (height * 3) / 4);
    line(20, 20, width - 20, 20);
    line(20, 20, 20, height - 20);
    line(width - 20, 20, width - 20, height - 20);
    line(20, height - 20, width - 20, height - 20);
    line(360, 600, 560, 600);
}
function preload(){
  img = loadImage("tortoise1.png");
}
function setup() { 
    whitee = color(255,255,255);
    bluee = color(85,104,225);
    turq = color(115,195,188);
    pinkk = color(255,220,247);
    yelloww = color(252,255,29);
    redd = color(219,64,42);
    blackk = color(0,0,0);
    greenn = color(10,197,72);
    magg = color(224,63,224);
    limee = color(90,224,211);
    darkpink = color(255,201,243);
    drawColor = blackk;
    createCanvas(900, 700);
    background("#FFFFFF");
    let b1 = new rectButton(
        50,
        610,
        120,
        50,
        pinkk,
        darkpink,
        0,
        " PAINT"
    );
    let b2 = new rectButton(50, 550, 120, 50, pinkk, darkpink, 1, "ERASE");
    let b3 = new circleButton(200, 570, 30, bluee, pinkk);
    let b4 = new circleButton(240, 570, 30, limee, pinkk);
    let b5 = new circleButton(280, 570, 30, magg, pinkk);
    let b6 = new circleButton(320, 570, 30, yelloww, pinkk);
    let b7 = new circleButton(200, 630, 30, redd, pinkk);
    let b8 = new circleButton(240, 630, 30, blackk, pinkk);
    let b9 = new circleButton(280, 630, 30, whitee, pinkk);
    let b10 = new circleButton(320, 630, 30, greenn,pinkk);
    let b11 = new sliderButton(360, 600, 200, pinkk, pinkk);
    let b12 = new saveButton(700,570,120,50,pinkk,darkpink,1,"  SAVE");
    buttonList = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];    
    time = 0;
}
function draw() {
    background("#FFFFFF");
    border();
    
    stroke(drawColor);
    strokeWeight(drawThickness);
    if (
        mouseX < width - 25 &&
        mouseX > 25 &&
        mouseY > 25 &&
        mouseY < (height * 3) / 4 - 10
    ) {
        if (mouseIsPressed) {
            line(mouseX, mouseY, pmouseX, pmouseY);
            let l = new Line(
                mouseX,
                mouseY,
                pmouseX,
                pmouseY,
                drawColor,
                drawThickness
            );
            append(lineList,l);
        }
    }
    noStroke();
    fill(turq);
    textSize(40);
    text(drawThickness, 600, 610);
    strokeWeight(7);
    for (let line of lineList) {
        line.display();
    }
    strokeWeight(7);
    for (let button of buttonList) {
        button.display();
    }
    image(img,27,27, 850, 490); 
    if (mouseIsPressed) {
        for (let button of buttonList) {
            let p = button.isClicked(mouseX, mouseY);
        }
    }
  noStroke();

  fill(drawColor);
  ellipse(mouseX, mouseY, drawThickness, drawThickness);
  time +=1;
}
