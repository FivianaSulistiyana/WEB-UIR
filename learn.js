
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