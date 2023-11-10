const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

const player = new MusicPlayer(musicList);

// müzik bilgilerini dom üzerinden aktardım
window.addEventListener("load", () =>{
    let music = player.getMusic();
    displayMusic(music);
});

// müzik bilgilerini alıyorum
function displayMusic(music){
    title.innerText = music.getName();
    image.src = "images/" + music.images;
    audio.src = "mp3/" + music.way;;
}

play.addEventListener("click", () => {
    audio.play();
})


