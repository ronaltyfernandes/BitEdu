function animateValue(element, finalValue, duration = 2500) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Valor atual da animação
    const currentValue = Math.floor(progress * finalValue);

    element.textContent = formatValue(element.dataset.original, currentValue);

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function formatValue(originalValue, number) {
  // Mantém símbolos como +, h, %, etc
  const prefix = originalValue.match(/^[^\d]*/)[0];
  const suffix = originalValue.match(/[^\d]*$/)[0];

  return `${prefix}${number}${suffix}`;
}

// OBSERVER para iniciar a contagem só quando aparecer na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const p = entry.target;
      const original = p.dataset.original; // valor original
      const number = parseInt(original.replace(/\D/g, ""), 10);

      animateValue(p, number);
      observer.unobserve(p); // roda apenas uma vez
    }
  });
}, { threshold: 0.5 });

// Seleciona todos os <p> dentro de cards
document.querySelectorAll(".cards p").forEach(p => {
  p.dataset.original = p.textContent.trim(); // salva valor original
  observer.observe(p);
});
