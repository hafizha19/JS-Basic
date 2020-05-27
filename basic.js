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

// Rotate the string
let str = "_.:|:.__.:||:.__.:|||:._";
let spl = str.split('');
let nStr = spl.length-1;
let last = str.substr(-1);
let cutLast = str.slice(0,-1);
let result = "";
// document.write(str+"<br/>");
for(let i = 0; i < nStr; i++){
    last = str.substr(-1);
    cutLast = str.slice(0,-1);
    // document.write(last+cutLast+"<br/>");
    str = String(last+cutLast);
}
    
// Leap Year
function cekTahun(){
    let tahun = prompt("Masukkan Tahun yang Ingin Dicek");
    if (tahun!=null) {
        if (tahun%400!=0 && tahun%4==0) {
            document.querySelector(".leapYear").innerHTML = "Tahun "+tahun+" adalah <b>Kabisat</b> menurut Gregorian Calender";    
        } else {
            document.querySelector(".leapYear").innerHTML = "Tahun "+tahun+" adalah <b>Bukan Kabisat</b> menurut Gregorian Calender";    
        }
       
    }
}

// Penentuan tahun yang diawali hari Senin di antara 2014-2050
let tahuns = [];
for(let tahun = 2014; tahun < 2050; tahun++){
    tahuns.push(tahun);
}
let res="";
for (let i = 0; i<tahuns.length; i++){
    let tanggal = new Date(tahuns[i], 0, 1);
    if (tanggal.getDay()==0){
        res += "Tahun yang dimulai pada hari Senin adalah "+tahuns[i]+"<br/>";       
    }
}
document.querySelector(".startSunday").innerHTML = res;

// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
function cekNum(){
    let number = Math.floor(Math.random()*10);
    let cekNumber = prompt("Masukkan angka 1-10 secara random, jawaban: "+number);
    if (number==cekNumber){
        window.alert("Good Work");
        return "Good Work";
    } else {
        window.alert("Not Matched");
        return "Not Matched";
    }
}
// document.querySelector(".ranNum").innerHTML = cekNum();

// Write a JavaScript program to calculate days left until next New Year
let minutes = 1000 * 60;
let hours = minutes * 60;
day = hours * 24;
let t= d.getTime();
let newYear = new Date(d.getFullYear()+1,0,1);
let resTime = newYear.getTime()-t;
res = "Jumlah hari sebelum tahun baru: "+Math.ceil(resTime/day);
document.querySelector(".newYear").innerHTML = res;

// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
let hasil;
function multiply(){
    a = document.getElementById("numA").value;
    b = document.getElementById("numB").value;
    hasil = a*b;
    document.querySelector(".hasil").innerHTML = hasil;
}
function divide(){
    a = document.getElementById("numA").value;
    b = document.getElementById("numB").value;
    hasil = a/b;
    document.querySelector(".hasil").innerHTML = hasil;
}

