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