"use strict";
// problem 01
function formatString(input, toUpper) {
    const result = toUpper === false ? input.toLowerCase() : input.toUpperCase();
    return result;
}
// problem 02
function filterByRating(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].rating >= 4) {
            result.push(items[i]);
        }
    }
    return result;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
console.log(filterByRating(books));
