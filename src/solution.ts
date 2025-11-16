// initialized the assignment and readme file.

// problem 1

function formatValue(
  value: string | number | boolean,
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

console.log(formatValue("hello"));
console.log(formatValue(5));
console.log(formatValue(true));

// Problem 2

function getLength(value: string | Array<number | string | boolean>): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40, "dhsj", true]));

// problem 3

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
console.log(person2.getDetails());
