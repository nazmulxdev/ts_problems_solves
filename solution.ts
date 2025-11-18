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

function getLength(value: string | Array<unknown>): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    throw new Error("Value must be a string or an array");
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

function filterByRating(
  arr: Array<{
    title: string;
    rating: number;
  }>,
): Array<{
  title: string;
  rating: number;
}> {
  const newArr: Array<{
    title: string;
    rating: number;
  }> = arr.filter((value) => {
    if (value.rating < 0 || value.rating > 5) {
      throw new Error(
        `Invalid rating: ${value.rating}. Rating must be between 0-5.`,
      );
    }
    return value.rating >= 4;
  });
  return newArr;
}

function filterActiveUsers(
  users: Array<{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }>,
): Array<{
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}> {
  const newArray: Array<{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }> = [];
  for (let arr of users) {
    if (arr.isActive === true) {
      newArray.push(arr);
    }
  }

  return newArray;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(value: Book): void {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`,
  );
}

function getUniqueValues(
  arr1: Array<string | number>,
  arr2: Array<string | number>,
): Array<string | number> {
  const combinedArr: Array<string | number> = [];
  for (let value of arr1) {
    combinedArr[combinedArr.length] = value;
  }
  for (let value of arr2) {
    combinedArr[combinedArr.length] = value;
  }

  let newArray: Array<string | number> = [];

  for (const value of combinedArr) {
    let check: boolean = false;
    for (let i = 0; i < newArray.length; i++) {
      if (value === newArray[i]) {
        check = true;
      }
    }
    if (!check) {
      newArray[newArray.length] = value;
    }
  }

  return newArray;
}

function calculateTotalPrice(
  products: Array<{
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }>,
): number {
  const calculatedPrice = products.reduce(
    (
      acc: number,
      curr: {
        name: string;
        price: number;
        quantity: number;
        discount?: number;
      },
    ): number => {
      if (curr.discount !== undefined) {
        if (curr.discount < 0 || curr.discount > 100) {
          throw new Error(`Invalid Discount: ${curr.discount}. Must be 0-100.`);
        }
      }

      const totalPrice: number = curr.price * curr.quantity;
      let totalDiscount: number = 0;
      if (curr.discount !== undefined) {
        totalDiscount = totalPrice * (curr["discount"] / 100);
      }
      const finalPrice = totalPrice - totalDiscount;
      return acc + finalPrice;
    },
    0,
  );
  return calculatedPrice;
}
