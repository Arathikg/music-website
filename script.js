console.log("welcome to spotify");
let songindex=0;

let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('pgb');
let gif=document.getElementById('gifid');
let songitems=Array.from(document.getElementById('songitems'));
//audioelement.play();
let songs=[
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"},
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"},
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"},
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"},
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"},
  
    {songname:"let me love you", filepath:"song/1.mp3", coverpath:"cover/c1.jpg"}
]
songitems.forEach(element,i) =>{
    console.log(element,i);
    element.getElementById("img")[0].src=songs[i]=coverpath;
    element.getElementByClassName("songName")[0].innerText=songs[i].songname;

});

//handle play/pause clicked
masterplay.addEventListener('click',()=>{
if(audioelement.paused || audioelement.currentTime<=0)
{
    audioelement.play();
    masterplay.classList.remove('');
    masterplay.classList.add('');
    gif.style.opacity=1;
}
else{
    audioelement.pause();
    masterplay.classList.remove('');
    masterplay.classList.add('');
    gif.style.opacity=0; 
}

})
audioelement.addEventListner('timeupdate',()=>
{


console.log('timeupdate');
progress=parseFloat((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);
myprogressbar.value=progress
    
})
myprogressbar.currentTime=myprogressbar.value/100;