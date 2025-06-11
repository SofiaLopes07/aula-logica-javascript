//Abrindo um banco de dados IndexedDB
const request = indexedDB.open("clienteDB", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const store = db.createObjectStore("clientes" , {keyPath: "id"});
    store.createIndex("nome", "nome", {unique: false});
}

request.onsucess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");


//Adicionado um novo cliente
store.add({ id: 1, nome: "Maria Eduarda", email: "maria@email.com"});

//Lendo um cliente pelo nome
const index = store.index("nome");
const nomeIndex = index.get("Maria Eduarda");

nomeIndex.onsuccess = function(){
    console.log(nomeIndex.result);
}
}