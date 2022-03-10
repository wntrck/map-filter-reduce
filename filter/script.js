function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [2, 34, 53, 65, 78, 203, 204];

console.log(filtraPares(meuArray));