// querySelector ile belirtilen yerlere ulaşıyorum
const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const prev = document.querySelector("#controls #prev");
const play = document.querySelector("#controls #play");
const next = document.querySelector("#controls #next");

const duration = document.querySelector("#duration");
const currentTime = document.querySelector("#current-time");
const progressBar = document.querySelector("#progress-bar");

// yeni obje oluşturdum
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

// müzik çalıyor mu çalmıyor mu kontrolü için 
// contains metodu varsa true yoksa false değer döndürür 
play.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

// playe tekrar tıkladığımızda classa playing özelliği silinir
// tıklandığında pause ikonu aftif olur
function pauseMusic(){
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

// playe tıkladığımızda playing özelliği eklenir
// tıklandığında play ikonu aktif olur
function playMusic(){
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

// önceki butonuna tıklandığında precMusic fonk çağırır
prev.addEventListener("click", () => {
    prevMusic();
});

// müziği başlatır, müzik bilgilerini getirir
// değiştirdikten sonra playMusic() dediğimiz için müzik direkt başlar
function  prevMusic(){
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

// sonraki butonuna tıklandığında nextMusic fonk çağırır
next.addEventListener("click", () => {
    nextMusic();
});

// müziği başlatır, müzik bilgilerini getirir
// değiştirdikten sonra playMusic() dediğimiz için müzik direkt başlar
function  nextMusic(){
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

const calculateTime = (sumSeconds) => {
    const minutes = Math.floor(sumSeconds / 60);
    const seconds = Math.floor(sumSeconds % 60);
    const updateSeconds = seconds < 10 ? `0${seconds}`: `${seconds}`;
    const sonuc = `${minutes}:${updateSeconds}`;
    return sonuc;
}

// müziğin ilişkilendirildiğini garanti altına alıyorum
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});



audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);
});
