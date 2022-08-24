import { Api } from "./api.js"

async function editarDadosCliente() {
    const selectClientes = document.querySelector("#clientesNomes")
    const btnBusca = document.querySelector("#btnBuscar")
    const btnAtualizar = document.querySelector("#btnAtualizar")
    const cliente = await Api.listarClientes()

    cliente.forEach((elem, id) => {
        const nomesOptions = document.createElement("option")
        nomesOptions.innerText = elem.nome
        selectClientes.append(nomesOptions)

        selectClientes.addEventListener("click", (event) => {
            const client = event.target.value
            console.log()
            if (client == elem.nome) {
                btnBusca.addEventListener("click", (events) => {
                    events.preventDefault()
        
        
                    const nome = document.getElementById("nome")
                    const email = document.getElementById("email")
                    const idade = document.getElementById("idade")
                    const cpf = document.getElementById("cpf")
                    const sexo = document.getElementById("sexo")
                    const cep = document.getElementById("cep")
                    const rua = document.getElementById("rua")
                    const numero = document.getElementById("numero")
                    const bairro = document.getElementById("bairro")
                    const cidade = document.getElementById("cidade")
                    const estado = document.getElementById("estado")
        
                    nome.value = elem.nome
                    email.value = elem.email
                    idade.value = elem.idade
                    cpf.value = elem.cpf
                    sexo.value = elem.sexo
                    cep.value = elem.endereco.cep
                    rua.value = elem.endereco.rua
                    numero.value = elem.endereco.numero
                    bairro.value = elem.endereco.bairro
                    cidade.value = elem.endereco.cidade
                    estado.value = elem.endereco.estado
        
                    btnAtualizar.addEventListener("click", (eventos) => {
                        eventos.preventDefault()
                        const json = {
                            "id": id,
                            "nome": `${nome.value}`,
                            "email": `${email.value}`,
                            "sexo": `${sexo.value}`,
                            "idade": `${idade.value}`,
                            "cpf": `${cpf.value}`,
                            "endereco": {
                                "estado": `${estado.value}`,
                                "cidade": `${cidade.value}`,
                                "bairro": `${bairro.value}`,
                                "numero": `${numero.value}`,
                                "rua": `${rua.value}`,
                                "cep": `${cep.value}`
                            }
                        }
                        console.log(json)
                        Api.editarCliente(json,elem.id)
        
                    })
                })
            }
        })
    });

}
editarDadosCliente()



const btnBusca = document.querySelector("#btnBuscar")
const btnAtualizar = document.querySelector("#btnAtualizar")
const selectClientes = document.querySelector("#clientesNomes")



