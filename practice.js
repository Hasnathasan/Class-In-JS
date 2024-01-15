const odd = [1, 3, 5, 7, 9];
const even = odd.map(num => num + 1);
console.log(even);
const array = [33, 50, 79, 78, 90, 101, 30];
const filtur = array.filter(num => num % 10 == 0);
console.log(filtur);
const array1 = [4, 5, 3, 5, 4, 7, 5, 6];
const reduce = array1.reduce((previous, current) => previous + current, 0);
console.log(reduce);