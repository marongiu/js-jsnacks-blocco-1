// Chiedo all'utente di inserire 4 cifre

var numeri = prompt("Dammi 4 numeri:");

somma = 0;

for (var i = 0; i < numeri.length; i++) {
  somma = somma + parseInt(numeri[i]);
}

console.log(somma);
