var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// change the button text to start to stop when click 
// and if click again change back to original text
var start = document.getElementById('button');
start.addEventListener('click', function(e){
    if(e.target.textContent === 'Start'){
        e.target.textContent = 'Stop';
        // start speech recognition
        recognition.start();
    }else if(e.target.textContent === 'Stop'){
        e.target.textContent = 'Start';
        // stop speech recognition
        recognition.abort();
    }
})

const ctx = document.getElementById('canvas').getContext('2d');

// name of the animals displayed on the canvas
function displayScreen(){
    ctx.font = '100px Arial';
    ctx.fillText('Cat',320,150);
    ctx.fillText('Dog',305,250);
    ctx.fillText('Squirrel',222,350);
    ctx.fillText('Tiger', 279,450);
    ctx.fillText('Panda', 247,550);
}

// clear the canvas
function clear(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}

var animals =[
    {name: 'cat', image: 'images/cat.jpeg'},
    {name: 'dog', image: 'images/dog.jpeg'},
    {name: 'squirrel', image: 'images/squirrel.jpg'},
    {name: 'tiger', image: 'images/tiger.jpeg'},
    {name: 'panda', image: 'images/panda.jpeg'}
];

// display image of the animal on the canvas
function displayAnimals(image){
    clear();
    var img = new Image();
    img.src = image;
    img.onload = function(){
        ctx.drawImage(img, 0, 0);
    };
}

// get user speech input and display the images of the animal if input is one of the animals on the canvas
// if user speech input is help: read the instruction to the user
// if user speech input is about: read the name of the author and copyright with the year
recognition.onresult = function(event) {
    var sp = event.results[0][0].transcript;
    if(sp == 'help'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Say a name of the object to see the object on the screen'));
    }else if(sp == 'about'){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('Christy Lin, Copyright 2021'));
    }else if(sp === 'cat'){
        displayAnimals(animals[0].image);
    }else if(sp === 'dog'){
        displayAnimals(animals[1].image);
    }else if(sp === 'squirrel'){
        displayAnimals(animals[2].image);
    }else if(sp === 'tiger'){
        displayAnimals(animals[3].image);
    }else if(sp === 'panda'){
        displayAnimals(animals[4].image);
    }else{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance('No match'));
        clear();
        ctx.fillText('Unknown',190,200);
    }
}

recognition.onspeechend = function(){
    recognition.stop();
}

displayScreen();
