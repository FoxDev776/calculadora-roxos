function calcular() {
  const quantidade = parseInt(document.getElementById("quantidade").value);
  const parceria = document.getElementById("parceria").checked;
  const farmFeito = document.getElementById("farmFeito").checked;
  const farmNaoFeito = document.getElementById("farmNaoFeito").checked;

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Digite uma quantidade válida.");
    return;
  }

  const preco = parceria ? 500 : 600;
  const total = quantidade * preco;

  let porcentagemMembro = 0.30;
  let porcentagemFac = 0.70;

  if (farmFeito) {
    porcentagemMembro = 0.90;
    porcentagemFac = 0.10;
  } else if (farmNaoFeito) {
    porcentagemMembro = 0.50;
    porcentagemFac = 0.50;
  }

  const valorMembro = total * porcentagemMembro;
  const valorFac = total * porcentagemFac;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <strong>Total da venda:</strong> R$ ${total.toLocaleString()}<br>
    <strong>Facção (${(porcentagemFac * 100).toFixed(0)}%):</strong> R$ ${valorFac.toLocaleString()}<br>
    <strong>Membro (${(porcentagemMembro * 100).toFixed(0)}%):</strong> R$ ${valorMembro.toLocaleString()}
  `;
}
