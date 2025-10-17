const figlet = require('figlet');

figlet("Shoaib Akhtar ", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});