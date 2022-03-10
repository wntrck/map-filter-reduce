const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log("Quando this é maçã", mapComThis(nums, maca));
console.log("Quando this é laranja", mapComThis(nums, laranja));


function mapSemThis(array) {
    return array.map(function(item) {
        return item * 2
    })
}

const numeros = [2, 3, 5, 8];

console.log(mapSemThis(numeros));