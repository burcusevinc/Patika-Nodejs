// yarıçapı konsoldan parametre olarak al
// daire alanı hesapla
// yazdır

//konsola girilen yarıçap değerini alma
let yaricap = process.argv.slice(2)

let pi = 3.14

function alanHesapla(yaricap) {
    let daireAlan = pi * yaricap * yaricap
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${daireAlan}`);
}

alanHesapla(yaricap)

