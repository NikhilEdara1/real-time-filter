noseX=0;
noseY=0;

function preload(){
   x=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    poser=ml5.poseNet(video,modelloaded);
    poser.on('pose',gotposes);
}
function modelloaded(){
    console.log("poseNet is loaded");
}
function gotposes(result){
if(result.lenght>0){
    console.log(result);
    noseX=result[0].pose.nose.x-15;
    noseY=result[0].pose.nose.y-15;
}
}
function draw(){
    image(video,0,0,300,300);
    image(x,noseX,noseY,30,30);
}