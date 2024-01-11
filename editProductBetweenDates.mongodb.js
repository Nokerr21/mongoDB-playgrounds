use("NFC_db");
try {
  db.nfcs.updateMany(
    { "timeStamp" : {$gte:"6-12-2023 18:1:3",
                    $lt:"6-12-2023 18:31:58"} },
    { $set: { "info": "New product information" },
      $inc: {"__v": 1}  
    }
  );
} catch (err) {
  console.log(err);
}