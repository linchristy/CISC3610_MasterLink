function colorCanvas(){
    var area = document.getElementById("board").getContext("2d");

    // background color of the sky (x,y, width, height)
    var gradient = area.createLinearGradient(0,0,0,200);
    gradient.addColorStop(0,"#72C9E8");
    gradient.addColorStop(1,"#FFFFFF");
    area.fillStyle = gradient;
    area.fillRect(0,0,500,255);

    // background color of the ground
    area.fillStyle = "#FAE094";
    area.fillRect(0,255,500,148);

    //background color of the sea
    gradient = area.createLinearGradient(0,100,0,200);
    gradient.addColorStop(0,"#72C9E8");
    gradient.addColorStop(1,"#295185");
    area.fillStyle = gradient;
    area.fillRect(0,165,500,148);
}
colorCanvas()

function drawArea(){

    var area = document.getElementById("board").getContext("2d");
    
    // drawing of the sun 
    area.beginPath();
    area.fillStyle="#ffff00";
    area.arc(95,75,45,2*Math.PI,0*Math.PI);
    area.fill();

    // drawing of the right cloud
    area.beginPath();
    area.fillStyle="#FFFAFA";
    area.ellipse(285,70,40,35,0,0,Math.PI*2);
    area.ellipse(345,71,46,45,0,0,Math.PI*2);
    area.ellipse(395,70,40,35,1,0,Math.PI*2);
    area.closePath();
    area.fill();

    // drawing of the left cloud
    area.beginPath();
    area.ellipse(40,100,47,35,0,0,Math.PI*2);
    area.ellipse(15,91,51,42,0,0,Math.PI*2);
    area.fill();

    // drawing of the sail 
    area.beginPath();
    area.lineWidth = 2;
    area.strokeStyle = "#000000";
    area.fillStyle="#FFFFFF";
    area.moveTo(350, 150);
    area.lineTo(350, 10);
    area.lineTo(253, 155);
    area.closePath();
    area.stroke();
    area.fill();

    // drawing of the pole 
    area.beginPath();
    area.moveTo(353,175);
    area.lineTo(353,8);
    area.lineTo(357,8);
    area.lineTo(355,175);
    area.stroke();
    area.fill();
    

    // drawing of the boat body
    area.beginPath();
    area.fillStyle="#855e42";
    area.arc(350,170,90,2*Math.PI,1*Math.PI);
    area.closePath();
    area.stroke();
    area.fill();
}
drawArea()

function waves(){
    var waves = document.getElementById("board").getContext("2d");

    /**
     * create rectangle covering a portion of the boat
     * as a background for the illusion of the waves down below
     */
    waves.fillStyle="#295185";
    waves.fillRect(0,223,500,50);

    /**
     * loop semicircle (bottom half) covering only the boat
     * over the rectangle to create an illusion of a wave
     */
    for(var i =300; i<=400; i+=50){
        waves.beginPath();
        waves.fillStyle="#855e42";
        waves.arc(i,215,25,2*Math.PI,1*Math.PI);
        waves.fill();
    }
}
waves()

function addCaption(){
    var caption = document.getElementById("board").getContext("2d");
    
    // create text on convas
    caption.fillStyle="#000000";
    caption.font= "14px Arial";
    caption.fillText("A brown boat lost at sea", 180,350);
}
addCaption()
