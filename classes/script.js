class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `${this.name} says "Meow"!`;
  }
}

class Dog extends Pet {
  bark() {
    return `${this.name} says "Woof"!`;
  }
}

const maddux = new Cat("Maddux", 12, 5);
const cleo = new Dog("Cleo", 6);
