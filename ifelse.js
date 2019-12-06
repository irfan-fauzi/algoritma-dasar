/*
    PERCABANGAN dan PENGKONDISIAN

    if kondisi then
        aksi
    end if    

    PROGRAM BilanganGanjil
    { Mencetak pesan "Bilangan Ganjil" jika pengguna menginputkan bilangan ganjil, 
      mencetak pesan "Bilangan Genap" jika pengguna menginputkan bilangan genap   }
    
    DEKLARASI
    x = integer
    ALGORITMA 
    read(x)
    if x mod 2 = 1 then
        write('Bilangan ganjil')
        else
        write('Bilangan genap')
    end if
*/
const x = 10;
if (x % 2 == 1) {
  console.log("bilangan ganjil");
} else {
  console.log("bilangan genap");
}