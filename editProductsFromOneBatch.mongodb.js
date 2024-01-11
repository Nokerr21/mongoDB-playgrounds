use("NFC_db");
try {
  db.nfcs.updateMany(
    { "batchNumber" : "11124-2022" },
    { $set: { "info": "This product is not fit for consumption!" }, 
      $inc: {"__v": 1} 
    }
  );
} catch (err) {
  print(err);
}