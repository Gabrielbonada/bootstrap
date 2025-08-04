function finalizarPedido() {
  const itens = document.querySelectorAll('input[name="item"]:checked');
  if (itens.length === 0) {
    alert("Selecione pelo menos um item.");
    return;
  }

  let pedido = "Pedido:\n";
  itens.forEach(item => pedido += `- ${item.value}\n`);

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: pedido + "\nChave PIX: 12345678900",
    width: 200,
    height: 200
  });

  alert("Pedido gerado com sucesso! Aponte a câmera para o QR Code para pagar.");
}
