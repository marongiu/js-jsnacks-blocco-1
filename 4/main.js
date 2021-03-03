

// Chiedo all'utente il suo nome
var nome = prompt("Come ti chiami?");

// creo un array con gli invitati
var invitati = ["Andrea", "Alex", "Rosa", "Fabio", "Valerio"]

// controllo se è presente nella lista
var nomePresente = false;

for (var i = 0; i < invitati.length; i++) {
  if (invitati[i] == nome) {
    // se l'email è presente ricreo successivamente una nuova condizione seiPresente == true
    nomePresente = true;
  }
}

// Imposto il messaggio
if (nomePresente == true) {
  console.log("Sei tra gli invitati");
} else {
  console.log("Non sei tra gli invitati");
}
