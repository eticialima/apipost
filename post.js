const API_URL = "sua API";

document
  .getElementById("equipamentoForm")
  .addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const body = {
    nome_equipamento: document.getElementById("nome_equipamento").value,
    nome_display: document.getElementById("nome_display").value,
    idsectra: document.getElementById("idsectra").value,
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    console.log("Sucesso:", data);

  } catch (error) {
    console.error("Erro:", error);
  }
}