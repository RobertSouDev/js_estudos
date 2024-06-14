let numero = [100,239, 49,28,32,15, 222,462]

let numerofilter = numero.filter(numero => numero > 100)
console.log(numerofilter) // chama todos o elemento que satisfaz a condicao

let numeroFind =  numero.find(numero => numero > 100)
console.log(numeroFind) // chama o primeiro elemento que satisfaz a condicao

