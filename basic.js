// Current day and time
var d = new Date();
var day = document.querySelector(".day");
var days = ["Ahad", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
day.innerHTML = "Hari: "+days[d.getDay()];
var time = document.querySelector(".time");
time.innerHTML = "Jam: "+d.getHours()+" : "+d.getMinutes()+" : "+d.getSeconds();

// Current Date
var date = document.querySelector(".date");
date.innerHTML = d.getMonth()+"-"+d.getDay()+"-"+d.getFullYear();

// Luas Segitiga Sembarang
var sgtg = document.querySelector(".segitiga");
var a = 5;
var b = 6;
var c = 7;
var s = (a+b+c)/2;
var luas = Math.sqrt(s*(s-a)*(s-b)*(s-c));
sgtg.innerHTML = "Sisi-sisinya= 5,6,7. Maka Luasnya: "+luas;

