/*
    PROGRAM MengenaliNama
    { Mengecek pakah input nama dari pengguna dikenali atau tidak. 
      Input dari program ini yaitu sebuah nama. Output dari program ini yaitu "dikenali" atau "tidak dikenali" }

    DEKLARASI
    n : String
    
    ALGORITMA
    read (n) 
    if (n = 'irfan') or (n = 'fauzi' ) then
        write('dikenali')
    else
        write('tidak dikenali')
    end if        
*/

// const name = 'irfan fauzi';
// if (name == 'irfan' || name == 'fauzi') {
//     console.log('dikenali');
// } else {
//     console.log('tidak dikenali')
// }

/*
    PROGRAM Menghitung Harga Baju
    { Menghitung Harga Baju Sesuai Merk dan Ukuran
      Merk A harga : Rp.80.000, Merk B Harga : Rp.75.000
      Lengan Panjang A harga ditambah Rp.7.000,
      Lengan panjang B harga ditambah Rp.5.000,
      input adalah merk baju dan "lengan panjang" atau "lengan pendek".
      outputnya adalah harga baju.  }

      DEKLARASI
      // input
      merk : char
      lengan : string

      // output
      harga : integer

      ALGORITMA
      read(merk)
      read(lengan)
      if ( merk = 'a' ) 
            if      ( lengan = 'lengan panjang' ) then
                        write( 80.000 + 7.000 )
            else if ( lengan = 'lengan pendek' ) then
                        write (80.0000)
            else
                write ('lengan a tidak ditemukan')
            end if    


      else if (merk = 'b')
            if      (lengan = 'lengan panjang') then
                      write (75.000 + 5.000 )
            else if (lengan = 'lengan pendek' ) then
                      write (75.000)
            else 
                write ('lengan b tidak ditemukan)
            end if    
      else
          write ('merk tidak ditemukan')
          
      end if    
*/
var merk = "a";
var lengan = "panjang";


if (merk == "b") {
  if (lengan == "panjang") {
    console.log("80.000")
  } else if (lengan == "pendek") {
    console.log("75.000")
  } else {
    console.log("merk B ukuran itu tidak ada");
  }

} else if (merk == "a") {
  if (lengan == "panjang") {
    console.log("60.000")
  } else if (lengan == "pendek") {
    console.log("50.000");
  } else {
    console.log("merk a ukuran itu tidak ada");
  }
} else {
  console.log("merk itu tidak ada di toko ini");
}