document.addEventListener("DOMContentLoaded", function () {
  // Ativa fade-in na seção de boas-vindas
  const welcomeSection = document.querySelector(".py-5.bg-dark");
  if (welcomeSection) {
    welcomeSection.classList.add("fade-in");
  }

  // Scroll suave (para links internos)
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Anima os cards ao rolar para a tela
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // Alerta após tempo de inatividade (opcional)
  let idleTimer;
  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      alert("Está com fome? Faça seu pedido pelo WhatsApp!");
    }, 120000); // 2 minutos de inatividade
  }

  document.addEventListener("mousemove", resetIdleTimer);
  document.addEventListener("keydown", resetIdleTimer);
  resetIdleTimer(); // inicializa
});
