let userName = prompt("Adiniz nedir?")

let myName = document.querySelector("#myName")

const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
myName.innerHTML=userName;

show()
let curentTime = setInterval(show,1000)

function show(){
    var date=new Date() // satırı ile tarih bilgisini tarih isimli değişkene alıyoruz.
    var timeNow = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + " " + days[date.getDay()];
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML=timeNow;
}

