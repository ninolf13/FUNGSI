function hitungRataRata(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function tentukanPredikat(rata) {
    if (rata >= 85) {
        return 'A';
    } else if (rata >= 75) {
        return 'B';
    } else if (rata >= 60) {
        return 'C';
    } else {
        return 'D';
    }
}

function cetakRapor(nama, n1, n2, n3) {
    let rataRata = hitungRataRata(n1, n2, n3);
    let predikat = tentukanPredikat(rataRata);

    console.log("Nama      : " + nama);
    console.log("Rata-rata : " + rataRata.toFixed(2));
    console.log("Predikat  : " + predikat);
    console.log("------------------------"); 
}

cetakRapor("Budi", 85, 80, 82);
cetakRapor("Siti", 90, 95, 88);
cetakRapor("Ahmad", 55, 65, 58);