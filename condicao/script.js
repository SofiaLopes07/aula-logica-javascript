// if (se condição for verdadeira)
const numerico = 10 ;
 
if (numerico > 8){
    console.log("O número informado é maior que 8");
} else {
     console.log("O número é menor que 8 ");
    }
 
//else (se condição for falsa)
//estrutura aninhada e complexa
const nomealuno = "Juliano";
 
if(nomealuno === "Juliano"){
    console.log("Olá " + nomealuno);
}
else if(nomealuno ==="Maria"){
    console.log("Olá Maria");
}else{
    console.log("O nome não é Juliano e nem Maria");
}
//encadeamento de condição
let idade = 16;
let temRG = false;
 
if(idade >= 18 && temRG){
    console.log("Você pode votar");
}
else{
    console.log("Você não pode votar");
}
 
//switch
 
let novaidade = 18;
switch(novaidade){
    case 18:
        console.log("O usuário tem 18.");
        break;
        case 17:
            console.log("O usuário tem 17.");
            break;
            default:
                console.log("Idade inválida");
}