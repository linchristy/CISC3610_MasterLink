// save title on local storage
function saveTitle(title){
    localStorage.setItem("title",title);
};

// save note on local storage
function saveNote(note){
    localStorage.setItem("field", note);
};

function onLoad(){
    // set the value of title and notes to what is stored on the local storage 
    document.getElementById("title").value = localStorage.getItem("title");
    document.getElementById("field").value = localStorage.getItem("field");
};

// Once the basic HTML document is loaded, onLoad function begins
document.addEventListener('DOMContentLoaded', onLoad);

// Clear all input text
function clearText(){

    document.getElementById("title").value="";
    document.getElementById("field").value="";
    // clear everything stored in local storage
    localStorage.clear();
}

