console.log("ACaca");
let params = new URLSearchParams(document.location.search.substring(1));
let from = params.get("from"); // is the string "Jonathan"
console.log(from);

if (from == 'whatsapp') {
    document.getElementById(from).style.display = "none"; 
}
if (from == 'telegram') {
    document.getElementById(from).style.display = "none"; 
}
if (from == 'instagram') {
    document.getElementById(from).style.display = "none"; 
}
if (from == 'tiktok') {
    document.getElementById(from).style.display = "none"; 
}
if (from == 'youtube') {
    document.getElementById(from).style.display = "none"; 
}


//let age = parseInt(params.get("age"), 10); // is the number 18

console.log(window.location.href);

var audio = document.getElementById("audio");


function playAudio(){
    console.log("PlayAudio");
    audio.play();   
}



$(window).on('load', function() {
    $('#myModal').modal('show');
});