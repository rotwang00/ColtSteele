function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

let purple = makeColor(122, 2, 125);
console.log(purple);
let purpleRGB = purple.rgb();
console.log(purpleRGB);
console.dir(purple);
console.log(purple.hex());
