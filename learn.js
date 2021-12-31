
//membuat variable
    let myNumber=16;
    let myString="Hello"
    let myBoolean=true
    const phi=3.14
    //menampilkan informasi ke console
    console.log(myNumber)
    console.log(myString)
    console.log(myBoolean)
    console.log(phi)
    //menampilkan informasi dalam bentuk alert pada window
    window.alert("Angka favorit saya adalah:"+myNumber)
    window.alert('Angka favorit saya adalah:'+myNumber)
    window.alert(`Angka favorit saya adalah:${myNumber}`)

//menampilkan variable informasi ke console
let x = 8
let y = 4
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x)

//menampilakn operasi perbandingan ke console
let a = 8
let b = 4
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b)

//menampilkan operator logika ke console
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

// Membuat fungsi sederhana
function luas_persegi(sisi){
    var luas= sisi * sisi;
    return luas;
}

var luas = luas_persegi(10);
console.log("Luas Persegi = " + luas);

function luas_segitiga(alas, tinggi){
    var luas = 0.5 * alas * tinggi;
    return luas;
}
var luas = luas_segitiga(12,10);
console.log("Luas Segitiga=" +luas);

function vol_balok(panjang, lebar, tinggi){
    var volume = panjang * lebar * tinggi;
    return volume;
}
var volume = vol_balok(4,6,5);
console.log("Volume Balok = " + volume);

//Menampilkan array dengan list buah
var fruits = ["Banana", "Orange", "Apple", "Manggo"]; 

//mengganti index 1
var index = fruits.indexOf("Orange");

if (~index){
    fruits[index] = "Cerry";
}

//metode yang diterapkan
fruits.push("Kiwi");
fruits.pop();
fruits.unshift("Strawberry");
fruits.shift();
fruits.sort();
fruits.reverse();

//menampilkan
console.log(fruits);
console.log(fruits.length);

let person = {
    id : 2110188,
    firsName : "Fiviana",
    lastName :"Sulistiyana",
    Unur :20,
    jurusan : "Teknik Infromatika",
    fullName : function(){
        return this.firsName + " " + this.lastName;
    }
};

//dot notation
console.log(person.firsName);
console.log(person.lastName);
console.log(person.id);
console.log(person.umur);
console.log(person.jurusan);
console.log(person.fullName());

//bracket notation
console.log(person["id"]);
console.log(person["firsName"]);
console.log(person["lastName"]);
console.log(person[ "umur"]);
console.log(person[ "jurusan"]);
console.log(person["fullName"]());

//anomalia pada javascript
console.log(0.1 + 0.2 == 0.3)
console.log(1 + "1")
console.log(1 - "1")
console.log(1 < 2 < 3)
console.log(3 > 2 > 1)
console.log(null == 0)
console.log(null > 0)
console.log(null >=0)




