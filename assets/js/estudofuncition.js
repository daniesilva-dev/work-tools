/*
const somar = (a, b) => {
    return a + b;
};
console.log(somar(10, 100));

const calcularMedia = (n1, n2, n3) => {
    let media = (n1 + n2 + n3) / 3;
    let resultadoMedia = media >= 8.5 ? "Parabéns sua média é " + media + " você passou!" : "Sua média é " + media + "Reprovado!";
    return resultadoMedia;
}
console.log(calcularMedia(10, 8, 9));

//============================================================================

const verificarPar = (numero) => {
    if (numero % 2 === 0) {
        return true;
    } else {
        false;
    }
}
console.log(verificarPar(20));
*/
//============================================================================
/*
const contarLetras = (texto) => {
    const textoSemEspaco = texto.replace(/\s/g, '');
    return textoSemEspaco.length;
}
console.log(contarLetras("Daniel"));*/
//============================================================================

/*
O que foi feito?

foi criado uma função constante com o nome de "contarLetras" e foi atribuída a ela
o parâmetro "texto".

Dentro da função foi criado variável constante com o nome "textoSemEspaço" e foi atribuído a ela,
o parâmetro usado na função "contarLetras" (texto), em seguida usamos o método "replace" com a expressão
"(/\s/g '')" replace(/\s/g, ''), para encontrar todo os espaços e quebras de linha e substituir por 
uma string vazia.

Então usamos o return com a variável constante "textoSemEspaco", atribuindo a ela o método "length",
para percorrer todos os caracteres e retornar a quantidade de letras (textoSemEspaco.length).

Depois um console.log para imprimir.
 
*/

/*
const contarLetras = (texto) => {
    const textoSemEspaco = texto.replace(/\s/g, ''); // Metodo "replace" e expressão "(/\s/g, ');"
                                                     // "repalace()/\s/g, ")" metodo para retirar
                                                     // espaços, tabulações e quebras de linha.

    return textoSemEspaco.length; //Retorna a quantidade de caracteres "length"
}
console.log(contarLetras("Daniel da silva siqueira"));
*/

/*
function contarLetras(texto) {
    const textoSemEspaco = texto.replace(/\s/g, '');

    return textoSemEspaco.length;
}
let digitarTexto = prompt("Digite seu texto")
let contarLetra = contarLetras(digitarTexto);

console.log(`${digitarTexto} tem ${contarLetra} letras`);
*/
//============================================================================
/*
const contarLetras = (texto) => {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i].match(/[a-zA-Z]/)) {
            contador++
        }
    }
    return contador;
}
let textDigitado = prompt("");
let letrasContadas = contarLetras(textDigitado);

console.log(`${textDigitado} tem ${letrasContadas} letras`);
*/

/*
const contarLetra = (texto) => {
    let contador = texto.replace(/\s/g, '');
    return contador.length;
}
console.log(contarLetra("Daniel"));
*/
//============================================================================
/*
Crie uma função chamada calcIdade que recebe o ano de nascimento de uma pessoa
como parâmetro e retorna a idade atual da pessoa.
*/
/*
function calcIdadeAtual(anoNascimento) {
    const anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNascimento;
    return idade;
}

let addAno = prompt("Digite seu ano de nascimento");
let minhaIdade = calcIdadeAtual(addAno);

console.log(`Sua idae é ${minhaIdade} anos.`);
*/
//============================================================================

//Crie uma função chamada imprimirMaior que recebe dois números como parâmetros e imprime o maior deles.
/*
const imprimirMaior = (n1, n2) => {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

let digiteNumber1 = Number(prompt('Digite um dumero'));
let digiteNumber2 = Number(prompt('Digite um dumero'));

if (digiteNumber1 === digiteNumber2) {
    console.log(`Os Numeros são iguais`);
} else {
    console.log(`O numero maior é ${maiorNumero}`);
}

let maiorNumero = imprimirMaior(digiteNumber1, digiteNumber2);
*/


/*
Crie uma função chamada calcularMediaPonderada que recebe três notas e 
seus respectivos pesos como parâmetros, e retorna a média ponderada das notas.
--------------------------------------------------------------------------

function calcularMediaPonderada(nota1, peso1, nota2, peso2, nota3, peso3) {
    let calcpesos = peso1 + peso2 + peso3;
    let somaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    let resutadoPonderado =  somaPonderada / calcpesos;
    return resutadoPonderado;
}
let nota1User = Number(prompt("Digite nota 1"));
let peso1 = Number(prompt("Digite o peso da nota 1"));
let nota2User = Number(prompt("Digite nota 2"));
let peso2 = Number(prompt("Digite o peso da nota 2"));
let nota3User = Number(prompt("Digite nota 3"));
let peso3 = Number(prompt("Digite o peso da nota 3"));

console.log(`A media ponderada da notas é 
${calcularMediaPonderada(nota1User, peso1, nota2User, peso2, nota3User, peso3)}`);
*/

/*
const calcularMediaPonderada = (nota1, peso1, nota2, peso2, nota3, peso3) => {
    let peso = peso1 + peso2 + peso3;
    let mediaPonderada = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    return media = mediaPonderada / peso;
}
let peso1 = 1;
let peso2 = 3;
let peso3 = 2;
let calculoMedidaPonderada = calcularMediaPonderada(10, peso1, 8, peso2, 7, peso3);
console.log(calculoMedidaPonderada);
*/


