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