db.siswa.aggregate([
  {
    $group: {
      _id: "$kelas",
      total_siswa: { $sum: 1 }
    }
  }
]);