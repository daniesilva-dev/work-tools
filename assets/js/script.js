// Capturando os elementos
let inputText = document.getElementById('inputText');
let outputText = document.getElementById('outputText');
let processar = document.getElementById('process');
let clearContent2 = document.getElementById('clearContent');
let clearContentOutputText = document.getElementById('clearContentOutputText');
let negrito = document.getElementById('negrito');
let contador = document.getElementById('contador');
let styledText = document.getElementById('styledText');

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

  //Imprimir na tela
  document.getElementById('outputText').innerHTML = processedText;
  document.getElementById('styledText').innerHTML = processedText;
}

//Copiar conteudo
function copyToClipboard() {
  let outputTextCopy = document.getElementById('outputText');
  outputTextCopy.select();
  navigator.clipboard.writeText(outputTextCopy.value);

}

// Evento para o botão limpar
clearContent2.addEventListener('click', function() {
  clearContent();
});
// Função para limpar conteúdo
function clearContent() {
  inputText.value = '';
  outputText.innerHTML = '';
  contador.textContent = "0";
}

// Limpar conteudo de output
clearContentOutputText.addEventListener('click', function() {
  clearContentCopy();
});
function clearContentCopy() {
  outputText.innerHTML = '';
}




