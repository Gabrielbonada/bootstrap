document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const pagamentoSelect = document.getElementById("pagamento");
  const pixDiv = document.getElementById("pix-qr");
  const pixImg = document.getElementById("pix-qr-img");

  pagamentoSelect.addEventListener("change", function () {
    if (pagamentoSelect.value === "Pix") {
      // Aqui usamos um valor fictício como código Pix (chave aleatória ou cobrança)
      const codigoPix = "00020126360014BR.GOV.BCB.PIX0114+558199999999520400005303986540510.005802BR5925Restaurante Corleone6009Sao Paulo62070503***6304B13A";
      const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(codigoPix)}&size=300x300`;

      pixImg.src = qrUrl;
      pixDiv.style.display = "block";
    } else {
      pixDiv.style.display = "none";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const pedido = document.getElementById("pedido").value.trim();
    const endereco = document.getElementById("endereco").value.trim();
    const pagamento = pagamentoSelect.value;

    if (!nome || !pedido || !endereco || !pagamento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const mensagem = `
📌 *Pedido via Site - Restaurante Corleone* 📌

👤 *Nome:* ${nome}
🍕 *Pedido:* ${pedido}
🏠 *Endereço:* ${endereco}
💳 *Pagamento:* ${pagamento}

🕒 Enviado em: ${new Date().toLocaleString()}
    `;

    const numeroWhatsApp = "5551999999999"; // Substitua pelo seu número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});
