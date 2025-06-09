
//Maratona 2
//Verificação de maioridade
let idade = 17;
 
switch(idade){
    case 18:
        console.log("O usuário é maior de idade.");
        break;
        case 17:
            console.log("O usuário é menor de idade.");
            break;
            default:
}

//Cálculo de Salário com Aumento
let Salario = 7500;
let aumendoSalario;
if (Salario <= 2000){
    aumentoSalario = Salario * 1.10;
} else if (Salario <= 5000) {
    aumentoSalario = Salario * 1.07;
} else {
    aumentoSalario = Salario * 1.05;
}
console.log("Novo salário: R$" + aumentoSalario);

//Classificação de temperatura
let temperatura = 21;

if(temperatura <15){
    console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25){
    console.log("Agradável");
} else if (temperatura >= 26 && temperatura <= 35){
    console.log("Quente");
} else{
    console.log("Muito Quente")
}

//Maratona 3
// Lista de Tarefas domésticas
 
const tarefas =[ 'estudar' , 'lavar a louça' , 'Varrer a casa' , 'cozinhar',' dar banho no cachorro' , 'Arrumar a cama', 'ler um livro'];
 
tarefas.forEach((tarefa, indice) => {
    console.log(`Tarefa número ${indice}: ${tarefa}`);
})
 
 // Alarme
 
function AlarmeEm(segundos){
    console.log(`Alarme programado para ${segundos} segundos...`);
    setTimeout(() => {
        console.log('⏰ Alarme disparado!');
        process.stdout.write('\x10');
    }, segundos * 1200);
}
AlarmeEm(1);
 
// Contador de Moedas
let moeda = 1;
while(moeda<=12){
    console.log(`Você possuí ${moeda} moedas`);
    moeda = moeda + 1;
}