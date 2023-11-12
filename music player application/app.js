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

const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");

const ul = document.querySelector("ul");
 
// yeni obje oluşturdum
const player = new MusicPlayer(musicList);

// müzik bilgilerini dom üzerinden aktardım
window.addEventListener("load", () =>{
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
});

// müzik bilgilerini alıyorum
const displayMusic = (music) =>{
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
const pauseMusic = () =>{
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

// playe tıkladığımızda playing özelliği eklenir
// tıklandığında play ikonu aktif olur
const playMusic = () =>{
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

// önceki butonuna tıklandığında precMusic fonk çağırır
prev.addEventListener("click", () => {prevMusic();});

// müziği başlatır, müzik bilgilerini getirir
// değiştirdikten sonra playMusic() dediğimiz için müzik direkt başlar
const  prevMusic = () =>{
    player.prev();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
}

// sonraki butonuna tıklandığında nextMusic fonk çağırır
next.addEventListener("click", () => {nextMusic();});

// müziği başlatır, müzik bilgilerini getirir
// değiştirdikten sonra playMusic() dediğimiz için müzik direkt başlar
const  nextMusic = () =>{
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

// progressBara tıklandığında o tıklanan yerin saniyesini hesaplar ve oradan şarkıya devam eder
progressBar.addEventListener("input", () =>{
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

// muted = sesli, sesDurumu = muteState
let muteState = "muted";

// volumeBar a tıklandığında tııklandığı yere göre ses düzeyi ayarlansın
// volumeBarda input bilgisi 100 üzerinden alınır. audio da değer 0 ile 1 arasındadır bu yüzden 100 e bölünür
volumeBar.addEventListener("input", (e) =>{
    const value = e.target.value;
    audio.volume = value / 100;
    // ses sliderında 0 a tıkladığımda ikon değişsin istiyorum
    if(value == 0){
        audio.muted = true;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-xmark";
    }
    else{
        audio.muted = false;
        muteState = "muted";
        volume.classList = "fa-solid fa-volume-high";
    }

});

volume.addEventListener("click", () => {
    // ses butonuna tıklandığında ses kapansın, 0 durumuna gelsin ve ikonu değişsin
    if(muteState === "muted"){
        audio.muted = true;
        muteState = "unmuted";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    }
    
    // ses butonuna tıklandığında ses açılsın, 100 durumuna gelsin ve ikonu değişsin
    else{
        audio.muted = false;
        muteState = "muted";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});

// müzik listesini görmek için yazıyorum. for içerisindeki işlemlerle tüm şarkıları listeleyeceğim
const displayMusicList = (list) => {
    for(let i=0; i < list.length; i++) {
        let liTag = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${list[i].getName()}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="mp3/${list[i].way}"></audio>
            </li>
        `;
        ul.insertAdjacentHTML("beforeend", liTag);
        let liAudioDuration = ul.querySelector(`#music-${i}`);
        let liAudioTag = ul.querySelector(`.music-${i}`);
        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculateTime(liAudioTag.duration);
        });
    }
}