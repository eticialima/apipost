// Faz o post para o servidor
function fazPost(url, body) {
    fetch("http://324ff003c194.ngrok.io/equipamentos/",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    console.log(body) 
}

// faz um get  nos valores digitados
function postEquipamento() {
    event.preventDefault()
    let url = "http://324ff003c194.ngrok.io/equipamentos/"
    let nome_equipamento = document.getElementById("nome_equipamento").value
    let nome_display = document.getElementById("nome_display").value
    let idsectra = document.getElementById("idsectra").value
    console.log(nome_equipamento)
    console.log(nome_display)
    console.log(idsectra)
    body = {
        "nome_equipamento": nome_equipamento,
        "nome_display": nome_display,
        "idsectra": idsectra
    } 
    fazPost(url, body)
}