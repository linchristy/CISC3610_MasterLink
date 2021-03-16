window.onload=function(){
    var canvas = document.getElementById("hgraph").getContext("2d");
    var myChart = new Chart(canvas, {
        // horizontal bar graph
        type: 'horizontalBar',
        data: {
            // y axis labels 
            labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"],
            datasets: [{
                // units
                label: 'Gallon (per person per day)',
                // x axis label
                data: [1039,1021,1009,1006,996,1009,1002,990,1007,987],
                backgroundColor: ["#D6EAF8","#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72","#154360"],
                borderColor: ["#D6EAF8","#AED6F1","#85C1E9","#5DADE2","#3498DB","#2E86C1","#2874A6","#21618C","#1B4F72","#154360"],
                borderWidth: 1
            }]
        },
        options: {
            title:{
                display: true,
                // title of the graph
                text: 'Water Consumption in New York City by Christy Lin',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var canvas = document.getElementById("donut").getContext("2d");
    var myChart = new Chart(canvas, {
        // pie chart
        type: 'doughnut',
        data: {
            // district borough number
            labels: ["01M292","01M448","01M450","01M458","01M509",],
            datasets: [{
                // units
                label: 'Number of taker',
                // amount of SAT taker in each DBN
                data: [29,91,70,7,44],
                backgroundColor: ["#C8F69B","#FFEEA5","#FFCBA5","#FFB1AF","#D6D4FF"],
                borderColor: ["#C8F69B","#FFEEA5","#FFCBA5","#FFB1AF","#D6D4FF"],
                borderWidth: 1
            }]
        },
        options: {
            title:{
                display: true,
                // title
                text: 'Numbers of SAT takers vs District Borough Number by Christy Lin',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
};
