const lista = [
    {
        name: "sabão em pó",
        preco: 8,
    },
    {
        name: "cereal",
        preco: 9.99,
    },
    {
        name: "papel higiênico",
        preco: 12,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current) {
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));