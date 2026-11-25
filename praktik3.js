function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function cetakKeliling(sisi) {
  let hasil = kelilingPersegi(sisi);
  console.log('Persegi dengan sisi ' + sisi + ' memiliki keliling ' + hasil);
}

cetakKeliling(6);
cetakKeliling(10);