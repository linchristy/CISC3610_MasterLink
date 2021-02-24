var fruits =[
            {name: "Apple", quantity: 20, color: "#FF0800"},
            {name: "Orange", quantity: 10, color: "#FFA500"},
            {name: "Banana", quantity: 15, color: "#FFE135"}, 
            {name: "Kiwi", quantity: 3, color: "#86F151"},
            {name: "Blueberry", quantity: 5, color: "#4F86F7"},
            {name: "Grapes", quantity: 8, color: "#6F2DA8"}
        ];

// height of the bar for the fruits
var fruits_height = [0, 190, 90, 330, 290, 250];

function drawGraph(){

    var context = document.getElementById("chart").getContext("2d");
    // variable for alignment for text position 
    var k = 52;
    for(var i=0, j=-100; i<=fruits.length;i++,j++, k+=100){
        // colors of the fruits
        context.fillStyle = fruits[i].color;
        // create bar for the graph of each fruits quantity
        context.fillRect(j+=100, fruits_height[i], 100,600);
        // name of fruits and their quantity
        context.fillStyle = "#000000";
        context.font="15px Arial";
        // center the text of the fruits name and quantity within the canvas
        context.textAlign="center";
        context.fillText(fruits[i].quantity, k, 370, 400);
        context.fillText(fruits[i].name, k, 390, 400);
    }
}
