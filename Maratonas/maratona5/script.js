 
// 1Exercicio vetor
let Temperatura = [29, 24, 18, 30, 27];
 
for (let i = 0; i < Temperatura.length; i++ ){
    console.log(`${Temperatura[i]} °C`);
 
}
let soma = 0;
for (let temp of Temperatura){
    soma += temp;
}
let media = soma / Temperatura.length;
console.log(`Temperatura Média da semana: ${media.toFixed(2)}°C`);
 
// 2-Exercício de Matriz
 
let temperatura = [
  [16.0, 17.5, 18.0], // São Paulo
  [21.0, 22.0, 20.5], // Rio de Janeiro
  [18.0, 19.0, 19.5]  // Mogi das Cruzes
];
 
let cidade = ["São Paulo", "Rio de Janeiro", "Mogi das Cruzes"];
 
console.log("Temperatura durante 3 dias:");
for (let i = 0; i < temperatura.length; i++) {
  let linha = `${cidade[i]}: `;
  for (let j = 0; j < temperatura[i].length; j++) {
    linha += `${temperatura[i][j]}°C `;
  }
  console.log(linha);
}
 
console.log("\nMédia de temperatura por cidade:");
for (let i = 0; i < temperaturas.length; i++) {
  let soma = 0;
  for (let j = 0; j < temperaturas[i].length; j++) {
    soma += temperaturas[i][j];
  }
  let mediatemp = soma / temperaturas[i].length;
  console.log(`Média de ${cidades[i]}: ${mediatemp.toFixed(2)}°C`);
}
 
// 3-Exercício de ordenação de vetor
let precos = [19.90, 5.50, 12.30, 25.00, 8.75];
precos.sort((a, b) => a - b);
 
console.log("Preços em ordem crescente:");
for (let preco of precos) {
 
  console.log(`R$ ${preco.toFixed(2)}`);
}
 
 