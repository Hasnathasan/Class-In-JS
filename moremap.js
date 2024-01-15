// const numbers = [34, 54, 654, 23, 4, 564, 34, 564, 5, 34, ];
// const fun = num => {
//     const newNum = num;
//     const num2 = num + newNum;
//     return num2;
// }
// const sum = numbers.map(num => fun(num));
// console.log(sum);


const string = [
    { id: 1, name: 'Biri', section: 'science' },
    { id: 2, name: 'shiri', section: 'earse' },
    { id: 3, name: 'naria', section: 'comerce' }
];

const sec = string.map(name => name.section);
console.log(sec);