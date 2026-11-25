function luasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
    return 2 * (panjang + lebar);
}

let panjang = 10;
let lebar = 4;

let hasilLuas = luasPersegiPanjang(panjang, lebar);
let hasilKeliling = kelilingPersegiPanjang(panjang, lebar);

console.log("Luas = " + hasilLuas);
console.log("Keliling = " + hasilKeliling);