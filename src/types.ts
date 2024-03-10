// Tipe Data Primitif

let mobilKencang: boolean = true; //ini boolean
let kecepatanMobil : number = 99999; //ini angka bisa macem2
let pabrikMobil : string = "Toyota"; //ini string
let namaMobil : any = "Corolla"; //ini bisa macem2 tipe data

function printMobil(mobil: string) { //ini function
    console.log(mobil);
}

const printMobilArrow = (mobil: string): void => {
    console.log(mobil);
};

printMobilArrow("Toyoya Mint");

function lihatMobil(mobil: string | null) {
    
    if (mobil === null) {
        console.log("lah mobilnya ilang");
    } else {
        console.log("lah mobilnya nongol lagi",mobil);
    }

}


printMobil(namaMobil);
lihatMobil(null);
lihatMobil("Otopet")

//Tipe Tipe Object
interface Mobil {
    mobilKencang : boolean,
    kecepatanMax : number,
    kecepatanMin : number,
    pabrik : string,
    namaMobil: string,
}

function showcaseMobil (mobil:Mobil) {
    
    console.log(
        mobil.mobilKencang,
        mobil.kecepatanMax,
        mobil.kecepatanMin,
        mobil.pabrik,
        mobil.namaMobil,
    );

}

showcaseMobil({
    mobilKencang : mobilKencang,
    kecepatanMax : kecepatanMobil,
    kecepatanMin : 0,
    pabrik : pabrikMobil,
    namaMobil: namaMobil,
});


//Class 

class pabrikPembuatMobil {
    namaPabrik: string;
    namaMobil: string;
    kecepatanMax: number;
    kecepatanMin: number;
    mobilKencang: boolean;

    constructor(namaPabrik: string, namaMobil: string, kecepatanMax: number, kecepatanMin: number, mobilKencang: boolean) {
        this.namaPabrik = namaPabrik;
        this.namaMobil = namaMobil;
        this.kecepatanMax = kecepatanMax;
        this.kecepatanMin = kecepatanMin;
        this.mobilKencang = mobilKencang;
    }

    pesan() {
        console.log(
            `
            Pabrik ${this.namaPabrik} ingin memproduksi mobil bernama ${this.namaMobil} 
            dengan kecepatan maksimal ${this.kecepatanMax} dan kecepatan minimal ${this.kecepatanMin}
            mobil ini digadang menjadi mobil yang kencang ${this.mobilKencang}
            `
        )
    }
}

const pabrikFerrari = new pabrikPembuatMobil("Ferrari", "Ferrari 458", 300, 0, true);
pabrikFerrari.pesan();

type FerrariF1 = {
    tempatPabrik: string,
    seriMobil: string,
    kecepatanMax: number,
    kecepatanMin: number,
    mobilBadut: boolean,
}   

const F123Sf23 : FerrariF1 = {
    tempatPabrik:"Salatiga",
    seriMobil: "SF23",
    kecepatanMax:500,
    kecepatanMin:0,
    mobilBadut: false
}

console.log(F123Sf23["mobilBadut"]);


