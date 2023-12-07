
use("NFC_db");
try {
  db.nfcs.updateMany(
    { "batchNumber" : "61223-181" },
    { $set: { "info": "<span style='color: crimson; font-family: Ubuntu, Arial, Helvetica, sans-serif; font-weight: bold;'>This product is not fit for consumption!</span>" }}
  );
} catch (err) {
  print(err);
}