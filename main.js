canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rw=100;
rh=90;
rx=40;
ry=40;
ri="rover.png";
bi="mars.jpg";


function add(){

bt= new Image();
bt.onload= Ub;
bt.src=bi;

rt= new Image();
rt.onload= Ur;
rt.src=ri;

}

function Ub(){
ctx.drawImage(bt,0,0,canvas.width,canvas.height);


}

function Ur(){
    ctx.drawImage(rt,rx,ry,rw,rh);
}

window.addEventListener("keydown",my_down);
function my_down(e){
keyPressed=e.keyCode;

if(keyPressed=='37'){
Left();


}
if(keyPressed == '38') { up(); console.log("up"); } if(keyPressed == '39') { right(); console.log("right"); } if(keyPressed == '40') 
{ down(); console.log("down"); }
}
function Left(){
    if(rx>=0){
rx=rx-10;
Ub();
Ur();

    }
}
function down() { if(ry <=500) { ry =ry+ 10;
     //console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
     Ub(); Ur(); } } function right() { if(rx <= 700) { rx =rx + 10; 
        //console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        Ub(); Ur(); } } function up() { if(ry >=0) { ry = ry - 10; 
            //console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
 Ub(); Ur(); } }