use finallisa
switched to db finallisa
db.createCollection("Mahasiswa");
{ ok: 1 }
db.Mahasiswa.find()
db.Mahasiswa.insertMany([{ key: "user:1", value: "Andi" },
  { key: "user:2", value: "Budi" },
  { key: "user:3", value: "Citra" },
  { key: "user:4", value: "Dewi" },
  { key: "user:5", value: "Eko" }])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('68550c004141a77541c12263'),
    '1': ObjectId('68550c004141a77541c12264'),
    '2': ObjectId('68550c004141a77541c12265'),
    '3': ObjectId('68550c004141a77541c12266'),
    '4': ObjectId('68550c004141a77541c12267')
  }
}
db.Mahasiswa.find()
{
  _id: ObjectId('68550c004141a77541c12263'),
  key: 'user:1',
  value: 'Andi'
}
{
  _id: ObjectId('68550c004141a77541c12264'),
  key: 'user:2',
  value: 'Budi'
}
{
  _id: ObjectId('68550c004141a77541c12265'),
  key: 'user:3',
  value: 'Citra'
}
{
  _id: ObjectId('68550c004141a77541c12266'),
  key: 'user:4',
  value: 'Dewi'
}
