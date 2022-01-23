const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
const videoPlayer=document.getElementById("videoPlayer");

const myVideo=document.getElementById("myVideo");
function stopVideo(){
    videoPlayer.style.display="none";
    myVideo.muted=true;
}
function playVideo(file){
    myVideo.src=file;
    videoPlayer.style.display="block";
}