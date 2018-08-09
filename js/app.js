//select element and creat variables
//select all element and put them in one node list
var keys = document.querySelectorAll(".key")
var notes = {
    cKey: document.querySelector("#cAudio"),
    dKey: document.querySelector("#dAudio"),
    eKey: document.querySelector("#eAudio"),
    fKey: document.querySelector("#fAudio"),
    gKey: document.querySelector("#gAudio"),
    aKey: document.querySelector("#aAudio"),
    bKey: document.querySelector("#bAudio"),
}
//define function
//here key holds the element of ID
function playNote(key){
    notes[key].currentTime = 0
    //in the notes object we used the id of the html elements to identufy what audio element to play
    notes[key].play()
}
//call funtion and event listener
//key represent each element in my array
keys.forEach(function(key){
//click or keypress or so far so on is representing event    
    key.addEventListener("click",function(){
        playNote(key.id)
    })
})
document.addEventListener('keydown', function(event){
    if(event.key == "c"){
        playNote("cKey")
    }
    if(event.key == "d"){
        playNote("dKey")
    }
    if(event.key == "e"){
        playNote("eKey")
    }
    if(event.key == "f"){
        playNote("fKey")
    }
    if(event.key == "a"){
        playNote("aKey")
    }
    if(event.key == "b"){
        playNote("bKey")
    }
    if(event.key == "g"){
        playNote("gKey")
    }
})