// şarkı hakkındaki bilgileri alıyorum
class Music {
    constructor(title, singer, images, way) {
        this.title = title;
        this.singer = singer;
        this.images = images;
        this.way = way;
    }
    getName() {
        return  this.singer + " - " +  this.title;
    }
}

const musicList = [
    new Music("Çok Yazık","Çağan Şengün","1.jpeg","1.mp3"),
    new Music("Tövbe","Derya Bedavacı & UZİ","2.jpeg","2.mp3"),
    new Music( "Harika","Ebru Gündeş","3.jpeg","3.mp3"),
    new Music("Lafı Mı Olur","Kibariye","4.jpeg","4.mp3"),
    new Music( "Ateşe Düştüm","Mert Demir","5.jpeg","5.mp3"),
    new Music("Basit Numaralar","Zerrin Özer", "6.jpeg","6.mp3")
];

