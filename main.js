function preload(){
}

function setup()
{
    canvas = createCanvas(550,480);
    canvas.position(500 , 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color ="";
}
function draw()
{
    image(video,0,0,550,480)
    tint(tint_color)
}
function take_snapshot(){
    save("student_name.jpg")
}
function filter_tint(){
    tint_color = document.getElementById("color_name").value;
    document.getElementById("color_name").innerHTML = "";
}