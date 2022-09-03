Status="";
objects=[];

function setup()
{
canvas= createCanvas(380,380)
canvas.center();

video= createCapture(VIDEO);
video.size(380,380);
video.hide();
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

function gotResults(results,error)
{

if(error)
{
console.log(error);
}

console.log(results);
objects=results;
}

function draw()
{
 image(video,0,0,380,380)
 if(Status !="")
 {
ObjectDetector.detect(video,gotResults);
for(i=0; i<=objects.length;i++)
{
    document.getElementById("status").innerHTML="Object Detected";
    
    fill("red");
    percent= floor((objects[i].confidence)*100);
    text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    if(objects[i].label==Object_Name)
    {
document.getElementById("status").innerHTML="Object Found :"+objects[i].label
video.stop();
ObjectDetector.detect(video,gotResults);
    }
    else
    {
        document.getElementById("status").innerHTML="Object Not Found" 
    
    }
}
 }
 
}
