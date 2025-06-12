db.siswa.find({
  $and: [
    {umur: {$gte: 16}},
    {kelas: "12 IPA 1"}
  ]
});