Status="";
function preload()
{

}

function setup()
{
canvas= createCanvas(380,380)
canvas.center();

video= createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function draw()
{
 image(video,0,0,380,380)
}

function Start()
{
    ObjectDetector= ml5.objectDetector("cocossd",ModelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    Object_Name= document.getElementById("input").value;
}

function ModelLoaded()
{
    console.log("Model Loaded");
    Status= true;
}