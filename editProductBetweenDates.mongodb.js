use("NFC_db");
try {
  db.nfcs.updateMany(
    { "timeStamp" : {$gte:"6-12-2023 18:1:3",$lt:"6-12-2023 18:1:58"} },
    { $set: { "info": "<span style='color: crimson; font-family: Ubuntu, Arial, Helvetica, sans-serif; font-weight: bold;'>This product is not fit for consumption!</span>" }}
  );
} catch (err) {
  print(err);
}