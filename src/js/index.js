import { Api } from "./api.js"

async function listarClientesVitrine(){
    const cliente = await Api.listarClientes()
    const vitrineUl = document.querySelector(".container")
    cliente.forEach(elem => {
        const li            = document.createElement("li")
        li.classList.add("card")
        const h2            = document.createElement("h2")
        const divPessoais   = document.createElement("div")
        const h3Pessoais    = document.createElement("h3")
        const email         = document.createElement("p")
        const idade         = document.createElement("p")
        const cpf           = document.createElement("p")
        const sexo          = document.createElement("p")
        const divEndereco   = document.createElement("div")
        const h3Endereco    = document.createElement("h3")
        const cep           = document.createElement("p")
        const estado        = document.createElement("p")
        const cidade        = document.createElement("p")
        const bairro        = document.createElement("p")
        const rua           = document.createElement("p")
        const numero        = document.createElement("p")

        
        h2.innerText = elem.nome
        h3Pessoais.innerText = "Dados Pessoais"
        email.innerText = `Email: ${elem.email}`
        idade.innerText = `Idade: ${elem.idade}`
        cpf.innerText = `CPF: ${elem.cpf}`
        sexo.innerText = `Sexo: ${elem.sexo}`
        h3Endereco.innerText = "Endereco"

        cep.innerText = `CEP: ${elem.endereco.cep}`
        estado.innerText = `Estado: ${elem.endereco.estado}`
        cidade.innerText = `Cidade: ${elem.endereco.cidade}`
        bairro.innerText = `Bairro: ${elem.endereco.bairro}`
        rua.innerText = `Rua: ${elem.endereco.rua}`
        numero.innerText = `Numero: ${elem.endereco.numero}`
    

        divEndereco.append(h3Endereco, cep, estado, cidade, bairro, rua, numero)
        divPessoais.append(h3Pessoais, email, idade, cpf, sexo)
        li.append(h2, divPessoais, divEndereco)
        
        vitrineUl.append(li)
    });
}
listarClientesVitrine()




