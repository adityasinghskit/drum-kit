const sound= ["tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3","snare.mp3","crash.mp3","kick-bass.mp3"]
for(let i=0;i<document.querySelectorAll(".drum").length;i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",() => {
    var audio= new Audio("sounds/"+sound[i]);
    audio.play();
});
}