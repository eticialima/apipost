// Faz o post para o servidor
function postequipamento(url, body) {
    fetch("sua API",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    })
    console.log(body) 
}

// faz um get  nos valores digitados
function getEquipamento() {
    event.preventDefault()

    let url = "sua API"

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
    postequipamento(url, body)
}