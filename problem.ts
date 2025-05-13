// ! problem 01

function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello"));
// console.log(formatString("Hello", false));

// ! problem 02
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

// ! problem 03
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// ! problem 04
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make : ${this.make}, year ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model : ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

// ! problem 05
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue("shiham"));
// console.log(processValue(10));

// ! problem 06
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensiveProduct = products[0];
  console.log(mostExpensiveProduct);

  for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }

  return mostExpensiveProduct;
}

// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];

// console.log(getMostExpensiveProduct(products));

// ! problem 07
enum Day {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

function getDayType(day: Day): string {
  if (day === Day.sunday || day === Day.friday) {
    return "weekend";
  } else {
    return "weekday";
  }
}

// console.log(getDayType(Day.monday));
// console.log(getDayType(Day.sunday));

// ! Problem 08
async function squareAsync(durationNumber: number): Promise<number> {
  if (durationNumber < 0) {
    return Promise.reject(new Error(`Negative number not allowed`));
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(durationNumber * durationNumber);
    }, 1000);
  });
}

// squareAsync(4).then(console.log).catch(console.error);
// squareAsync(-3).then(console.log).catch(console.error);
