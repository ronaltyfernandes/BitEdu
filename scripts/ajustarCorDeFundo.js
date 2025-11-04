function ajustarGradienteTitulo() {
  const fundo = document.querySelector('.fundo-verde-home');
  const titulo = document.querySelector('.titulo-home');
  if (!fundo || !titulo) return;

  const fundoRect = fundo.getBoundingClientRect();
  const tituloRect = titulo.getBoundingClientRect();

  const limiteVerde = fundoRect.right;
  const larguraTitulo = tituloRect.width;
  const inicioTitulo = tituloRect.left;

  let percentualVerde = ((limiteVerde - inicioTitulo) / larguraTitulo) * 100;
  percentualVerde = Math.max(0, Math.min(100, percentualVerde));

  titulo.style.background = `linear-gradient(to right, black ${percentualVerde}%, var(--color-primary) ${percentualVerde}%)`;
}

// Chama ao carregar a página
document.addEventListener('DOMContentLoaded', ajustarGradienteTitulo);

// Atualiza quando a tela é redimensionada
window.addEventListener('resize', ajustarGradienteTitulo);
