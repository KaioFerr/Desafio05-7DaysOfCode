// listas
let frutas = []
let laticinios = []
let congelados = []
let doce = []
let outros = []

// mensagens
const msg = "Você deseja adicionar algum intem na lista de compras?"
const msg2 = "Qual comida você deseja inserir?"
const msg3 = "Qual categoria essa comida se encaixa? (frutas, laticínios, congelados, doces ou outros)"

for (i = 1; i !=0; i++){
    resposta1 = prompt(msg)
    if (resposta1 == "sim" || resposta1 == "Sim"){
        resposta2 = prompt(msg2)
        resposta3 = prompt(msg3)
        if (resposta3 == "frutas" || resposta3 == "Frutas"){
            let adicionar = frutas.push(resposta2)
        }
        else if (resposta3 == "laticínios" || resposta3 == "Laticínios" || resposta3 == "Laticinios" || resposta3 == "laticinios"){
            let adicionar = laticinios.push(resposta2)
        }
        else if (resposta3 == "Congelados" || resposta3 == "congelados"){
            let adicionar = congelados.push(resposta2)
        }
        else if (resposta3 == "Doces" || resposta3 == "doces"){
            let adicionar = doce.push(resposta2)
        }
        else if (resposta3 == "Outros" || resposta3 == "outros"){
            let adicionar = outros.push(resposta2)
        }

    }
    else{
        alert(` Fruta: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doce}\n Outros${outros}`)
        i = 0
        break
    }
}