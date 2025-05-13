// problem 01

function formatString(input: string, toUpper?: boolean): string {
  const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
  return result;
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello"));
// console.log(formatString("Hello", false));

// problem 02
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

// problem 03
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// problem 04
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

// problem 05
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue("shiham"));
// console.log(processValue(10));


// problem 06