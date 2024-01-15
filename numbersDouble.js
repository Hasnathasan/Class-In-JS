const double = numbers =>{
    const doubleArray = [];
    for(number of numbers){
        const doubleNum = number * 2;
        doubleArray.push(doubleNum)
    }
    return doubleArray;
}

const array = [4, 5, 2, 6, 7, 4];
const doubleAns = double(array);
console.log(doubleAns);