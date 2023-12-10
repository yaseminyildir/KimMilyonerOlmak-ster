//sorular ve cavaplar dizi içersine alınıyor
let sorular = [
    {
        "soru": "1) ABD başkanlarından John Fitzgerald Kennedy’e suikast düzenleyerek öldüren kimdir?",
        "a": "Jack Ruby",
        "b": "Clay Shaw",
        "c": "Lee Harvey Oswald",
        "d": "Yasemin Yildir",
        "cevap": "c"
    },
    {
        "soru": "2) Osmanlı’da Lale devri hangi padişah döneminde yaşamıştır?",
        "a": "III. Ahmet",
        "b": "IV. Murat",
        "c": "IIV. Ecem ",
        "d": "III. Selim",
        "cevap": "a"
    },
    {
        "soru": "3) Aşağıdakilerden hangisi Aziz Nesin'in bir eseri değildir?",
        "a": "Gol Kralı",
        "b": "Daha Adil Bir Dunya Mumkun",
        "c": "Zübük",
        "d": "Şimdiki Çocuklar Harika",
        "cevap": "b"
    },

    {
        "soru": "4) Hangisi periyodik tabloda bulunan bir element değildir?",
        "a": "Azot",
        "b": "Tahta",
        "c": "Oksijen",
        "d": "Helyum",
        "cevap": "b"
    },

    {
        "soru": "5) Fransız İhtilali kaç yılında gerçekleşmiştir?",
        "a": "1789-1799",
        "b": "1768-1787",
        "c": "1876-1889",
        "d": "2022-2023",
        "cevap": "a"
    },

];
//değişkenler
let suankiSoruIndex=0;
let dogruSayısı=0;
let yanlisSayisi=0;
let puan=0;
const htSoru = document.getElementById("soru");
const htCevap = document.getElementById("cevap");
const htSonuc= document.getElementById("sonuc");


function soruyuGoster() {
    const suankiSoru = sorular[suankiSoruIndex];
    htSoru.textContent = suankiSoru.soru;
    document.getElementById("A").textContent = suankiSoru.a;
    document.getElementById("B").textContent = suankiSoru.b;
    document.getElementById("C").textContent = suankiSoru.c;
    document.getElementById("D").textContent = suankiSoru.d;
}


function cevapKontrol() {
    const secilenCevap = document.querySelector('input[name="cevap"]:checked');
    //document.querySelector() fonksiyonu, belirtilen CSS seçiciye göre belirli bir HTML elemanını seçmek için kullanılır.
    //input: HTML'de input elementini ifade eder.
    //[name="cevap"]: Bu, input elementinin name özelliğinin "cevap" olduğunu belirtir.
    //:checked: Bu, yalnızca seçili olan input elemanlarını seçer.
    

    if (!secilenCevap) {
        htSonuc.textContent = "Lütfen bir cevap seçin!";
        return;
    }

    const kullaniciCevap = secilenCevap.value;
    const suankiSoru = sorular[suankiSoruIndex];//sorular dizisinden, belirli bir suankiSoruIndex değerine göre mevcut soruyu seçmek ve bu soruyu suankiSoru adlı bir değişkene atamak için 

    if (kullaniciCevap === suankiSoru.cevap) {
        htSonuc.textContent = "Doğru!";
        dogruSayısı++;
        puan+=100;
    } else {
        htSonuc.textContent = "Yanlış! Doğru cevap: " + suankiSoru.cevap;
        yanlisSayisi++;
    }

    suankiSoruIndex++;

    if (suankiSoruIndex < sorular.length) {
        soruyuGoster();
    } else {
        sonucuGoster();
        htSonuc.textContent = "Yarışma bitti!";
        htCevap.style.display = "none";// bu kod, cevabı  görünmez hale getiriyor.
    }
}

 function sonucuGoster(){
    const skor=document.getElementById("skorTablo");
    skor.innerHTML=`
    <ul class="list-group">
                            <li class="list-group-item" >doğru:${dogruSayısı}</li>
                            <li class="list-group-item">yanliş:${yanlisSayisi}</li>
                            <li class="list-group-item" >puan:${puan}</li>
                            
                          </ul>
    
    
    `
 }

soruyuGoster();
sonucuGoster();


