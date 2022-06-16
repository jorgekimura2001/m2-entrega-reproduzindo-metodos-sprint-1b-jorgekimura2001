// Escreva seu código aqui

function newForEach(arr, callback) {
    
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
                // valor, posição, array
    }
}

let y = [5,4,3,2,1]
let x = [1, 2, 3, 4, 5, 'a']

function newMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

function newFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log("//////////////////");

function newFind(arr, callback) {
    let find;
    for (let i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)) {
            return find = arr[i];
        } 
    }
    return find
}

function newIndexOf(arr, elem) {
    let indexof = 0;
    for (let i = 0; i < arr.length; i++){
        if (elem === arr[i]) {
            return indexof = i // perguntar sobre esse return e se está ok está funcao
        } else {
            indexof = -1
        }
    }
    return indexof
}

function newIncludes(arr, elem) {
    let includes = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === elem) {
            includes = true
        } 
    }
    return includes
}

// Duvida sobre o reduce 
function newReduce(arr, callback) {
    let acc = 0
    for (let i = 0; i < arr.length; i++){
        acc += callback(i, arr[i])
    }
    return acc

}

console.log(newReduce([1,2], (acc, atual) => acc = atual))


console.log([1,2].reduce((acc, atual) => {
    return acc +=  atual
}, 0))