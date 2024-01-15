const numbers = [34, 54, 23, 65, 12, 43, 54, 65];
const big = numbers.filter((num) => num > 30);
// console.log(big);
const less = numbers.filter((num) => num < 30);
// console.log(less);
const even = numbers.filter((num) => num % 2 === 0);
// console.log(even);
const odd = numbers.filter((num) => num % 2 !== 0);
// console.log(odd);
const profile = [
    { id: 1, name: "Hasnat" },
    { id: 2, name: "Hasan" },
    { id: 3, name: "Himu" },
    { id: 4, name: "Hello" }
];
const profileName = profile.filter((p) => p.name === "Hasan");
console.log(...numbers);
