let filhos = [];

function filho(id, nome, idade) {
    let crianca = {
        "nome": nome,
        "idade": idade,
        "id": id
    };
    filhos.push(crianca);
}

filho(1, "Miguel", 3);
filho(2, "Melissa", 5);
filho(3, "Caio", 8);
filho(4, "Jonas", 13);
filho(5, "Santos", 23);

filhos.forEach(obj => console.log(`Nome: ${obj.nome} \nidade: ${obj.idade}`)
)