class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
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

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  fullSaturation() {
    const { h, s, l } = this;
    return `hsl(${h}, ${100}%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    let oppositeH = (h + 180) % 360;
    return `hsl(${oppositeH}, ${s}%, ${l}%)`;
  }

  calcHSL() {
    let { r, g, b } = this;
    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if ((cmax = g)) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax - cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
