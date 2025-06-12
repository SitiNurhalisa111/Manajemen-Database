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