// FUNÇÃO DO BLOCO INTERATIVO "MONTE SUA EXPERIÊNCIA"
// ALTERE AQUI: as sugestões exibidas quando o usuário clica nos botões de 1, 2 ou 3+ dias.
// O parâmetro `days` representa o número de dias selecionado e `btn` é o botão clicado.
// As sugestões abaixo usam os nomes reais dos passeios oferecidos pela agência.
function updatePlan(days, btn) {
  // Remove a classe "active" de todos os botões para resetar o visual
  const buttons = document.querySelectorAll('.planner-btn');
  buttons.forEach((b) => b.classList.remove('active'));

  // Marca somente o botão clicado como ativo
  btn.classList.add('active');

  // Pega o elemento em que a sugestão será exibida
  const resultBox = document.getElementById('plannerResult');

  // Altere estas strings para mudar as recomendações do planner
  if (days === 1) {
    resultBox.innerHTML = '<strong>Sugestão:</strong> City Tour Caminhos de Tiradentes + City Tour Noturno Caminhos Iluminados';
  } else if (days === 2) {
    resultBox.innerHTML = '<strong>Sugestão:</strong> City Tour Caminhos de Tiradentes + Trilha do Mangue';
  } else {
    resultBox.innerHTML = '<strong>Sugestão:</strong> City Tour Caminhos de Tiradentes + Trilha da Travessia + Ensaio Fotográfico';
  }
}

// CARROSSEL DE FOTOS ("Momentos em Tiradentes")
// ALTERE AQUI: o tempo do autoplay (autoplayDelay, em milissegundos).
// Para adicionar/remover fotos, edite os .carousel-slide e .carousel-dot no HTML —
// não é preciso mexer neste script.
let currentSlide = 0;
const autoplayDelay = 5000;
let autoplayTimer = null;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!track || dots.length === 0) return;

  const totalSlides = track.children.length;

  // Garante que o índice sempre fique dentro do intervalo válido (efeito de loop)
  currentSlide = (currentSlide + totalSlides) % totalSlides;

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide += direction;
  updateCarousel();
  restartAutoplay();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  restartAutoplay();
}

function restartAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => moveCarousel(1), autoplayDelay);
}

// Inicializa o carrossel assim que a página carrega
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carouselTrack')) {
    updateCarousel();
    restartAutoplay();
  }
});
