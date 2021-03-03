// Crea un array vuota

var empty = ["", ""];

// Chiedo per 6 volte all'utente di inserire un numero

for (var i = 0; i < 6; i++) {
  var numero = prompt("Inserisci un numero:");
  // Controllo se è dispari
  if (numero % 2) {
    // Lo pusho all'interno dell'array
    empty.push(numero)
  }
}

console.log(empty);
