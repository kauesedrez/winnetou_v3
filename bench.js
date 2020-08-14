const fs = require("fs-extra");

var tempInit = new Date(),
  tempEnd,
  tempRes;
console.log("Benchmark inicializado");
// fs.readFile("./teste.mkv", "utf-8", (err, data) => {
//   tempEnd = new Date();
//   tempRes = tempEnd - tempInit;
//   console.log("tempRes :>> ", tempRes);
// });

const stats = fs.statSync("./teste.mkv");
console.log("stats.mtime :>> ", stats.mtime);
tempEnd = new Date();
tempRes = tempEnd - tempInit;
console.log("tempRes :>> ", tempRes);
