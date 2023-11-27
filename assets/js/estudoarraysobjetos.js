/*function isBigEnough(element, index, array) {
    return element >= 10;
}

//console.log([12, 11, 18, 130, 44].every(isBigEnough));;
console.log([12, 11, 18, 130, 44].every((element) => element <= 10))


let array = [1, 3, 5, 7, 8];
const even = (element) => element % 2 === 0;
console.log(array.some(even))
*/ 


//Funções dentro de objetos
/*
let car = {
    colo: "red",
    type: "car",
    registration: new Date('2016-05-02'),
    ligar: function() {
        console.log("Ligar o carro...");
    },
    acelerar: function() {
        console.log("Acelerar o carro...");
    }
};
console.log(car.type)
*/

/*
//Exemplos metodos push() e pop() - adicionam ou removem elementos no final de um array
let pendentes = ['Estutar JavaScript', 'Fazer compras', 'Pagar contas']; 
pendentes.push('Lavara o carro');
console.log(pendentes);//['Estutar JavaScript', 'Fazer compras', 'Pagar contas', 'Lavara o carro']

pendentes.pop();
console.log(pendentes);//['Estutar JavaScript', 'Fazer compras', 'Pagar contas']

//================================================================

//Exemplos metodos shift() e unshift() - adicionam ou removem elementos no início de um array

let filaPciientes = ['Ana', 'Calos', 'Marina'];
let pacienteAtendido = filaPciientes.shift(); //Remove o primeiro elemento e retorna-o, modificando o array original
console.log(pacienteAtendido); //'Ana'
console.log(filaPciientes); //['Calos', 'Marina']

filaPciientes.push('Mário', 'Marta'); //Add =>['Calos', 'Marina', 'Mário', 'Marta']
console.log(filaPciientes);


let listaTarefas = ['Comprara leite','Estudar JS'];
let novaCumprimento = listaTarefas.unshift('Pagara as contas'); //Adiciona um ou mais elementos ao início e retorna o novo comprimento do array, também modificando o array original
console.log(listaTarefas); //3
console.log(novaCumprimento); //['Pagara as contas', 'Comprara leite', 'Estudar JS']
*/
//================================================================
/*
//Exercicios Rotação de Elementos em um Array
let nums = [1,2,3,4,5,6];

function rotateArray(arr) {
    let temp = arr.shift();
    arr.push(temp);
    return temp
}

console.log(rotateArray(nums));
console.log(nums)
*/


//Exercicios Clonando um Array sem o Primeiro Elemento
/*
let original = [1,2,3,4,5,6];

function cloneArray(cloneArray) {
    let clone = [...cloneArray];
    let fistElement = clone.shift();
    return fistElement
}
console.log(cloneArray(original));
*/
/*
let original = [1,2,3,4,5,6];
let clone = [...original];
let fistCloneArray = clone.shift();

console.log(fistCloneArray)
console.log(clone)
*/

/*
//================================================================

 //slice e splice: extraem ou inserem elementos em uma posição específica de um array.

let convidados = ['alice', 'marcos', 'mariana', 'daine'];

let primeirosConvidados = convidados.slice(0, 2);
console.log(primeirosConvidados); //['alice', 'marcos']
console.log(convidados);

//Exemplo 1: Extrair elementos do meio de um array
//Suponha que você tenha um array de números e queira obter apenas os números entre os índices 2 e 4.
let numeros = [0, 1, 2, 3, 4, 5];
let extrcao = numeros.slice(2, 5); 
console.log(extrcao); //[2, 3, 4]
console.log(numeros);


//Exemplo 2: Criar um clone do array
//O método slice() sem argumentos cria uma cópia do array original.
let frutas = ['Banana', 'Maça', 'Abacate'];
let cloneFrutas = frutas.slice(2, 3);
console.log(cloneFrutas);//['Abacate']
console.log(frutas);


//Exemplo 3: Pegar os últimos elementos de um array
//Se você usar um índice negativo, o método slice() começa a contar a partir do final do array. Por exemplo, para pegar os últimos 2 elementos:

let linguagens = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];
let ultimasLiguagens = linguagens.slice(-2);
console.log(ultimasLiguagens); //(2) ['C#', 'Ruby']


//Exemplo 4: Excluir os últimos elementos de um array
//Você pode usar slice() para pegar todos os elementos exceto os últimos N elementos.
let esportes = ['Futebol', 'Basquete', 'Vôlei', 'Natação'];
let primeiros = esportes.slice(0, -1);
console.log(primeiros); // Saída: ['Futebol', 'Basquete', 'Vôlei']


//Exemplo 5: Dividir um texto em palavras
//Vamos supor que você tenha uma string e queira transformá-la em um array de palavras, e depois pegar apenas as duas primeiras palavras.
let texto = "A raposa marrom salta sobre o cão preguiçoso";
let palavras = texto.split(' ');
let primeirasPalavras = palavras.slice(0, 4);
console.log(primeirasPalavras); // Saída: ['A', 'raposa']

let meuTexto = "O rato roeu a rolpa do rei de roma feio e gordo";
let separarTexto = meuTexto.split(' ');

let primeirasPalavras2 = separarTexto.slice(0, separarTexto.length);
console.log(primeirasPalavras2);


//++++++++++++++++++++++++++++++++++++++++++++++++
//splice() O método splice é mais versátil. Ele pode ser usado para adicionar, remover ou substituir elementos em um array, modificando o array original.
let tarefas = ['Comprar leite', 'Estudar', 'Pagar contas',];
tarefas.splice(3, 0, 'levar o lixo', 'lavar o carro', 'cuidar do filha');
console.log(tarefas);


//Exemplo 1: Removendo Elementos
let listaCompras = ['maça', 'bananar', 'pera'];
listaCompras.splice(1, 1);
console.log(listaCompras);

//Exemplo 2: Adicionando Elementos => Você também pode usar splice() para adicionar elementos. Imagine que você tenha uma lista de livros e queira adicionar um novo no início:
let listaLivros = ['1984', 'o senhor dos anéis'];
listaLivros.splice(0, 0, 'duna');
console.log(listaLivros);

//Exemplo 3: Substituindo Elementos => Splice() também pode substituir elementos. Suponha que você tenha um array de cores e queira substituir "Vermelho" por "Azul":
let cores = ['Verde', 'Vermelho', 'Amarelo'];
cores.splice(2, 2, 'Azul');
console.log(cores);

//Exemplo 4: Adicionar e Remover Simultaneamente => Você pode tanto adicionar quanto remover elementos em uma única chamada do método splice(). Por exemplo, vamos substituir 'Cenoura' por 'Batata' e 'Tomate':

let alimentos = ['Maçã', 'Banana', 'Cenoura'];
alimentos.splice(2, 1, 'Batata', 'Tomate');
console.log(alimentos);


//Exemplo 5: Removendo Todos os Elementos a partir de um Índice = > Se você quiser remover todos os elementos a partir de um certo índice, você pode fazer isso omitindo o segundo argumento:
let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];
numeros2.splice(7); 
console.log(numeros2);

//================================================================

*/



















