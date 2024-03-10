"use strict";
// Tipe Data Primitif
let mobilKencang = true; //ini boolean
let kecepatanMobil = 99999; //ini angka bisa macem2
let pabrikMobil = "Toyota"; //ini string
let namaMobil = "Corolla"; //ini bisa macem2 tipe data
function printMobil(mobil) {
    console.log(mobil);
}
const printMobilArrow = (mobil) => {
    console.log(mobil);
};
printMobilArrow("Toyoya Mint");
function lihatMobil(mobil) {
    if (mobil === null) {
        console.log("lah mobilnya ilang");
    }
    else {
        console.log("lah mobilnya nongol lagi", mobil);
    }
}
printMobil(namaMobil);
lihatMobil(null);
lihatMobil("Otopet");
function showcaseMobil(mobil) {
    console.log(mobil.mobilKencang, mobil.kecepatanMax, mobil.kecepatanMin, mobil.pabrik, mobil.namaMobil);
}
showcaseMobil({
    mobilKencang: mobilKencang,
    kecepatanMax: kecepatanMobil,
    kecepatanMin: 0,
    pabrik: pabrikMobil,
    namaMobil: namaMobil,
});
//Class 
class pabrikPembuatMobil {
    constructor(namaPabrik, namaMobil, kecepatanMax, kecepatanMin, mobilKencang) {
        this.namaPabrik = namaPabrik;
        this.namaMobil = namaMobil;
        this.kecepatanMax = kecepatanMax;
        this.kecepatanMin = kecepatanMin;
        this.mobilKencang = mobilKencang;
    }
    pesan() {
        console.log(`
            Pabrik ${this.namaPabrik} ingin memproduksi mobil bernama ${this.namaMobil} 
            dengan kecepatan maksimal ${this.kecepatanMax} dan kecepatan minimal ${this.kecepatanMin}
            mobil ini digadang menjadi mobil yang kencang ${this.mobilKencang}
            `);
    }
}
const pabrikFerrari = new pabrikPembuatMobil("Ferrari", "Ferrari 458", 300, 0, true);
pabrikFerrari.pesan();
const F123Sf23 = {
    tempatPabrik: "Salatiga",
    seriMobil: "SF23",
    kecepatanMax: 500,
    kecepatanMin: 0,
    mobilBadut: false
};
console.log(F123Sf23["mobilBadut"]);
