use("NFC_db");
try {
  db.nfcs.deleteMany(
    { "__v" : 0 }
  );
} catch (err) {
  print(err);
}
