// Escreva seu código aqui

function newForEach(arr, callback) {
    
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr)
                // valor, posição, array
    }
}

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


function newReduce(arr, callback, valorInicial = 0) {
    let acc = valorInicial
    for (let i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i], i, arr)
    }
    return acc
}