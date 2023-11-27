// Capturando os elementos
let inputText = document.getElementById('inputText');
let processar = document.getElementById('process');
let clearContent2 = document.getElementById('clearContent');
let negrito = document.getElementById('negrito');
let contador = document.getElementById('contador');

// Evento para o botão processar
processar.addEventListener('click', function() {
  removeSpacesAndLineBreaks();
});

// Função para processar o texto
function removeSpacesAndLineBreaks() {
  let text = inputText.value;
  let processedText = text.replace(/\n/g, '<br>');

  if (text === "") {
    processedText = null;
  } else {
    processedText = `<p>${processedText}</p>`;
  }

  // Contador de caracteres
  let contagem = text.replace(/(\r\n|\n|\r)/gm, "").length;
  contador.textContent = contagem;

  // Substituir "Processo para Sublimação"
  processedText = processedText.replace(/Processo para Sublimação/g, '<strong>Processo para Sublimação</strong>');




  document.getElementById('outputText').innerHTML = processedText;
}

// Evento para o botão limpar
clearContent2.addEventListener('click', function() {
  clearContent();
});

// Função para limpar conteúdo
function clearContent() {
  inputText.innerHTML = '';
  document.getElementById('outputText').innerHTML = '';
  contador.textContent = "0";
}
