document.addEventListener("DOMContentLoaded", function () {
  // Aplica fade-in ao rolar para as seções do cardápio
  const sections = document.querySelectorAll(".mb-5");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Destaque nos itens ao passar o mouse
  const items = document.querySelectorAll(".list-group-item");
  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("bg-light", "shadow-sm");
    });
    item.addEventListener("mouseleave", () => {
      item.classList.remove("bg-light", "shadow-sm");
    });
  });

  // Alerta de sugestão após tempo navegando
  setTimeout(() => {
    const pedir = confirm("Gostou do cardápio? Que tal fazer seu pedido agora?");
    if (pedir) {
      window.location.href = "pedido.html";
    }
  }, 20000); // após 20 segundos
});
