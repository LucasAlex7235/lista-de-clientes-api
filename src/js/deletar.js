import {Api} from "./api.js"

async function deletarDadosCliente(){
    const selectClientesDelete = document.querySelector("#deletarCliente")
    const btnDeletar = document.querySelector("#btnDeletar")
    const cliente = await Api.listarClientes()

    cliente.forEach((elem, id) => {
        const nomesOptions = document.createElement("option")
        nomesOptions.innerText = elem.nome
        selectClientesDelete.append(nomesOptions)

        selectClientesDelete.addEventListener("click", (event)=>{
            const client = event.target.value
        
            if (client == elem.nome){
                btnDeletar.addEventListener("click", (events)=>{
                    events.preventDefault()
                    Api.deletarCliente(elem.id)
                    
                })
            }
        })
    })
}
deletarDadosCliente()