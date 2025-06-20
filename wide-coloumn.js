use finallisa2
switched to db finallisa2
db.createCollection("Mahasiswa");
{ ok: 1 }
db.Mahasiswa.insertMany([db.mahasiswa.insertMany([
  {
    nim: "D0222001",
    nama: "Andi",
    prodi: "Informatika",
    angkatan: 2021,
    ipk: 3.5
  },
  {
    nim: "D0222002",
    nama: "Budi",
    prodi: "Sistem Informasi",
    angkatan: 2020,
    ipk: 3.6,
    organisasi: "HIMSI"
  },
  {
    nim: "D0222003",
    nama: "Citra",
    prodi: "Informatika",
    angkatan: 2022
  },
  {
    nim: "D0222004",
    nama: "Dewi",
    prodi: "Teknik Elektro",
    angkatan: 2021,
    ipk: 3.8,
    sertifikat: ["CCNA", "AWS"]
  },
  {
    nim: "D0222005",
    nama: "Eko",
    prodi: "Informatika",
    angkatan: 2019,
    ipk: 3.9
  }
])])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68550dbe2723daedc4457eb3')
  }
}
db.Mahasiswa.find();
{
  _id: ObjectId('68550dbe2723daedc4457eb3'),
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68550dbe2723daedc4457eae'),
    '1': ObjectId('68550dbe2723daedc4457eaf'),
    '2': ObjectId('68550dbe2723daedc4457eb0'),
    '3': ObjectId('68550dbe2723daedc4457eb1'),
    '4': ObjectId('68550dbe2723daedc4457eb2')
  }
}
finallisa2
