//Maratona 5
//Exercício 1
let temperatura = [17.5 ,15.0 ,16.0 ,14.5 ,17.0];
console.log("Temperaturas da semana", temperatura);
 
for(let i = 0; i <temperatura.lenght; i++){
    console.log(`Dia ${i +1}: ${temperatura[i]}`);
}

let soma = 0;
for(let i = 0; i < temperatura.lenght; i++){
    soma += temperatura[i];
}

let media = soma/temperatura.lenght;

console.log(`Temperatura media da semana: ${media.toFixed(2)}`);

//Exercício 2
let temp = {
   SãoPaulo: [16, 15, 14],
   Riodejaneiro: [21, 21, 20],
   Curitiba: [14, 12, 13]
};
 for (let cidade in temp) {
   console.log(`${cidade}: ${temp[cidade]}`);
}
 
for (let cidade in temp) {
   let temperaturas = temp[cidade];
   let soma = temperaturas.reduce((a, b) => a + b, 0);
   let media = soma / temperaturas.length;
   console.log(`${cidade}: média de temperatura = ${media.toFixed(2)}°C`);
}
 
//Exercício 3
let precos = [19.90, 5.50, 12.30, 25.00, 8.75];
procos.sort(function(a,b){
   return a - b;
});
console.log("Preços em ordem crescente");
for (let i = 0; i < precos.length; i++){
    console.log(`R$ ${precos[i].toFixed(2)}`);
}
