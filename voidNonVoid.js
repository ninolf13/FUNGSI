function deretangka(atas,bawah){
    for (let i=atas; i<=bawah;i++){
        console.log(i+" ")
    }
}

deretangka(1,10);



function luaslingkaran(jari){
    let luas = 3.14*jari*jari;
    return luas;
}

console.log("Luas Lingkaran : "+luaslingkaran(10));