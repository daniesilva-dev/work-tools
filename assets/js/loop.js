/*let numero = 0;
while(numero <= 10) {
    console.log(numero);
    numero++;
}*/


for(let i = 1; i <= 10; i++) {
    console.log(i)
}

let listaCompras = ["Leite","Ovos", "Pão"]
for(let i = 0; i < listaCompras.length; i++) {
    console.log(listaCompras[i]);
}


for(let i = 1; i <= 10; i++) {
    console.log(5 * i);
}


for(let i = 0; i < 5; i++) {
    console.log("Bom dia!");
}


for(let i = 1; i <= 10; i++) {
    if ( i % 2 == 0) {
        console.log(i)
    }
}


let numeros = [1, 2, 3, 4, 5];
let soma = 0;
for(let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i];
    //soma += numeros[i]; Forma abreiada
}
console.log(soma)

let frase = "abacate é bom";
let conta = 0;
for(let i = 0; i < frase.length; i++) {
    if(frase[i] == "a") {
        conta++;
    }
}
console.log(conta);


let pontos = [10, 20, 30, 40];
let total = 0;
for(let i = 0; i < pontos.length; i++) {
    //total = total + pontos[i];
    total += pontos[i];
}
console.log(total);








/*let botaoClick  = document.querySelector('#botaoClick');
let demo  = document.querySelector('#demo');

botaoClick.addEventListener('click', function() {
    demo.innerHTML = "Hello JavaScript!";
    demo.classList.toggle('demos');
    demo.classList.toggle('bg');
});

let cores = [
    {nome: "Azul", qt: "5"},
    {nome: "Vemelha", qt: "15"},
    {nome: "Rosa", qt: "10"}
];*/

/*
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}
*/

/*
for (let i in cores) {
    cores[i].nome = cores[i].nome.toUpperCase();
}
console.log(cores);
*/

for (let cor of cores) {
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}







