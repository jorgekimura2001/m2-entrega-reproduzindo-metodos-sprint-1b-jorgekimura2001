// Escreva seu código aqui

function newForEach(arr, callback) {
    
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
                // valor, posição, array
    }
}

let x = [1, 2, 3, 4]

x.forEach(elem => console.log(elem))

console.log('//////////////////')

newForEach(x, (elem) => console.log(elem))

function newMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}
console.log("//////////////////");

newMap(x, (elem) => console.log(elem + 1));

function newFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log("//////////////////");

x.filter((elem) => console.log(elem % 2 === 0));
console.log("//////////////////");

newFilter(x, (elem) => console.log(elem % 2 == 0))
console.log("//////////////////");

function newFind(arr, callback) {
    let find = 'a';
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == callback(arr[i], i, arr)) {
           return find = arr[i];
        } else {
           return find = undefined;
        }
    }
    return find
}

console.log(x.find((elem) => elem % 2 === 0));
console.log("//////////////////");
console.log(newFind(x, (elem) => elem % 2 === 0))

