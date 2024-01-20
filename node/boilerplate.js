const fs = require("fs");

const newDir = process.argv[2] || "Project";
try {
  fs.mkdirSync(newDir);
  fs.writeFileSync(`${newDir}/index.html`, "");
  fs.writeFileSync(`${newDir}/script.js`, "");
  fs.writeFileSync(`${newDir}/style.css`, "");
} catch (e) {
  console.log("Something went wrong!");
  console.log(e);
}
