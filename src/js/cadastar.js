import {Api} from "./api.js"


async function valueInput() {
    const btn = document.querySelector("#btnCadastrar")
    const cliente = await Api.listarClientes()
    btn.addEventListener("click", (event) => {
        event.preventDefault()
        const nome = document.getElementById("nome").value
        const email = document.getElementById("email").value
        const idade = document.getElementById("idade").value
        const cpf = document.getElementById("cpf").value
        const sexo = document.getElementById("sexo").value
        const cep = document.getElementById("cep").value
        const rua = document.getElementById("rua").value
        const numero = document.getElementById("numero").value
        const bairro = document.getElementById("bairro").value
        const cidade = document.getElementById("cidade").value
        const estado = document.getElementById("estado").value

        const arrayData = [nome, email, idade, cpf, sexo, cep, rua, numero, bairro, cidade, estado]
        
        const verificarExistente = cliente.some(elem => elem.nome == nome)   
        if(!verificarExistente){
            Api.cadastrarCliente(convertJson(arrayData))
        }
    })
}

function convertJson(arrData) {

    const [nome, email, idade, cpf, sexo, cep, rua, numero, bairro, cidade, estado] = arrData

    const json = {
        "nome": `${nome}`,
        "email": `${email}`,
        "sexo": `${sexo}`,
        "idade": idade,
        "cpf": `${cpf}`,
        "endereco": {
            "estado": `${estado}`,
            "cidade": `${cidade}`,
            "bairro": `${bairro}`,
            "numero": `${numero}`,
            "rua": `${rua}`,
            "cep": `${cep}`
        }
    }
    return json
}



valueInput()