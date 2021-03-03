// Creo un ciclo per creare 10 prompt
var somma = 0;
for (var i = 0; i < 10; i++) {
  var numero = parseInt(prompt("Dammi un numero"));
  somma = numero + somma;
}

console.log(somma);
