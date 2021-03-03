// Chiedo all'utente due numeri

var numero1 = parseInt(prompt("Dammi il primo numero:"));

var numero2 = parseInt(prompt("Dammi il secondo numero:"));


// Stampo il numero maggiore

if (numero1 > numero2) {
  document.getElementById('numero').innerHTML = numero1;
} else {
  document.getElementById('numero').innerHTML = numero2;
}
