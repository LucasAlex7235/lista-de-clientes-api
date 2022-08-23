
class Api {

    static async listarClientes() {
        const baseUrl = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
            .then(resp => resp.json())
            .then(resp => resp)
        return baseUrl
    }

    static async cadastrarCliente(data) {
        const baseUrl = await fetch("https://atividade-api-clientes.herokuapp.com/clientes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
    }

    static async editarCliente(data, id) {
        const baseUrl = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        console.log(baseUrl)
    }

    static async deletarCliente(id) {
        const baseUrl = await fetch(`https://atividade-api-clientes.herokuapp.com/clientes/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
    }

}


export { Api }