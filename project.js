use sekolah;
db.createCollection("siswa");
db.siswa.insertOne({
  nama: "Budi",
  umur: 17,
  kelas: "12 IPA 1"
});
db.siswa.find();
db.siswa.find({nama: "Budi"});
db.siswa.updateOne(
  {nama: "Budi"},
  {$set: {umur: 18}}
);
db.siswa.deleteOne({nama: "Budi"});
db.siswa.find({umur: {$gt: 16}});
db.siswa.find({
  $and: [
    {umur: {$gte: 16}},
    {kelas: "12 IPA 1"}
  ]
});
db.siswa.bulkWrite([
  {
    insertOne: {
      document: { nama: "Ani", umur: 16, kelas: "11 IPA 2" }
    }
  },
  {
    updateOne: {
      filter: { nama: "Budi" },
      update: { $set: { kelas: "12 IPA 3" } }
    }
  },
  {
    deleteOne: {
      filter: { nama: "Citra" }
    }
  }
]);
db.siswa.aggregate([
  {
    $group: {
      _id: "$kelas",
      total_siswa: { $sum: 1 }
    }
  }
]);
db.createCollection("guru", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "mata_pelajaran"],
      properties: {
        nama: {
          bsonType: "string",
          description: "harus string dan wajib diisi"
        },
        mata_pelajaran: {
          bsonType: "string",
          description: "harus string dan wajib diisi"
        }
      }
    }
  }
});

