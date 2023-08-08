const fs = require("fs");
const DB_FILE_PATH = "./db";

function create(content) {
  fs.writeFileSync(DB_FILE_PATH, content);
  return content;
}

// function read() {
//   fs.readFile();
// }

console.log(create("CREATE"));
