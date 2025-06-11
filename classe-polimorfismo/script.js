//Superclasse 
class Ave{

    //Método
    voar() {
        console.log("A ave voa");
    }
}

//Superclasse
class Pinguim extends Ave {
    //polimorfismo
    voar() {
        console.log("Pinguins não podem voar");
    }
}

//Instãnciando
let ave = new Ave ();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();