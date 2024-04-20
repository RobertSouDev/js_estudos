let numero = [100,239, 49,28,32,15, 222,462]

const sum = numero.reduce((valorSomar, proximoValor )=> {

    return valorSomar + proximoValor
},0)

console.log(sum)