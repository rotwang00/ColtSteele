// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

// const color1 = new Color(255, 255, 2);
// const color2 = new Color(0, 200, 160);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  greet() {
    return `Hello from ${this.name}!`;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new Color(13, 44, 200, "random1");
console.log(c1.rgba(0.5));
