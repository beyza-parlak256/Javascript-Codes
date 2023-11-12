class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;// şarkılar index numarasına göre gelecektir
    }
    // müzik bilgisini indexe göre getirecek
    getMusic() {
        return this.musicList[this.index];
    }
    next() {
        // müzik sayısı son müzige gelene kadar arttırır
        if(this.index + 1 < this.musicList.length) {
            this.index++;
        }
        // son müzikten sonra tekrar başa dönecek
        else {
             this.index = 0;
        }
    }
    prev() {
        if(this.index != 0) {
            this.index--;
        } else {
            this.index = this.musicList.length - 1;
        }
    }
}
