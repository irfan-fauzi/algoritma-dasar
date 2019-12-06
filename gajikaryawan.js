/*
Program gaji Karyawan 
{ Program menghitung gaji bersih karyawan, data masukan yaitu : NIP, nama karyawan, Gaji pokok
  Gaji bersih = gaji pokok + tunjangan - pajak
  tunjangan = 25% dari gaji pokok
  pajak = 10% dari gaji pokok dan tunjangan 
  output dari program adalah : NIP, nama Karyawan dan gaji bersih      
}
DEKLARASI
const persenTunjangan = 0.25 (persenan tunjangan gaji)
const persenPajak = 0.10 (persenan pajak)
Namakaryawan : string
NIP : integer
GajiPokok, tunjangan, pajak, gajiBersih : real

ALGORITMA
read(NIP, NamaKaryawan, GajiPokok)
tunjangan <- gajiPokok * persenTunjangan 
pajak <- (gajiPokok + tunjangan) * persenPajak
GajiBersih <- gajiPokok + tunjangan - pajak

write(NIP, NamaKaryawan, GajiBersih)

/*/
//peraturan program perusahaan
const persenTunjangan = 0.25;
const persenPajak = 0.10;
// input user
const namaKaryawan = "Irfan fauzi";
const nip = 0923847823;
const gajiPokok = 15000000;
// logic program
const tunjangan = gajiPokok * persenTunjangan;
const pajak = (gajiPokok + tunjangan) * persenPajak;
const gajiBersih = gajiPokok + tunjangan - pajak;
console.log(namaKaryawan, nip, "gaji bersih anda : Rp.", gajiBersih);