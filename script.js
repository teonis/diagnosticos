// Obter elementos HTML
const sintomasInput = document.querySelector('textarea[name="sintomas"]');
const diagnosticoElement = document.querySelector('#diagnostico');
const probabilidadeElement = document.querySelector('#probabilidade');
const examesElement = document.querySelector('#exames');
const justificativaElement = document.querySelector('#justificativa');
const tratamentoElement = document.querySelector('#tratamento');
const atendimentoElement = document.querySelector('#atendimento');

// Função para gerar diagnóstico
function gerarDiagnostico(sintomas) {
  // Simular consulta com API de inteligência artificial
  const diagnostico = {
    nome: 'Doença X',
    probabilidade: 0.8,
    examesNecessarios: ['Exame Y', 'Exame Z'],
    justificativa: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    tratamentoPossivel: 'Medicamento A',
    atendimentoMedico: true
  };

  // Atualizar elementos HTML
  diagnosticoElement.textContent = diagnostico.nome;
  probabilidadeElement.textContent = `${diagnostico.probabilidade * 100}%`;
  examesElement.textContent = diagnostico.examesNecessarios.join(', ');
  justificativaElement.textContent = diagnostico.justificativa;
  tratamentoElement.textContent = diagnostico.tratamentoPossivel;
  atendimentoElement.textContent = diagnostico.atendimentoMedico ? 'Sim' : 'Não';
}

// Adicionar evento de submit ao formulário
document.querySelector('.anamnese form').addEventListener('submit', (event) => {
  event.preventDefault();

  // Obter sintomas do usuário
  const sintomas = sintomasInput.value;

  // Gerar diagnóstico
  gerarDiagnostico(sintomas);
});

// Gerar diagnóstico inicial
gerarDiagnostico('');
