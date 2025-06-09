//Maratona 4
//Exercício 1 Laço for:
let minutos = 10;

let fechamento = setInterval(() => {
 if (minutos > 0) {
    console.log(`Faltam ${minutos} minutos para o fechamento da sorveteria.`);
    minutos--;
 } else {
    console.log("A sorveteria está fechada.");
    clearInterval(fechamento);
 }
}, 6000);

//Exercício 2 while:
let clientes = 0; 
const maxclientes = 5;
while(clientes < maxclientes) {
    clientes++;
    console.log("Cliente entrou na sorveteria.")
}
console.log("A sorveteria está cheia.")