const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const sample = process.argv[2];

const langCode = franc(sample);
if (langCode == "und") {
  console.log("Not enough information. Try using a longer sample.".red);
} else {
  const result = langs.where("3", langCode);
  console.log(result.name.green);
}
