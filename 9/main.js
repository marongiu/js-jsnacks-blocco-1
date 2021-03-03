// Creo un array con 10 numeri
var numeri = [1,2,3,4,5,6,7,8,9,10];
console.log(numeri);

// Uso la stessa struttura dell'esercizio precedente per fare la somma
somma = 0;
for (var i = 0; i < numeri.length; i++) {
  somma = somma + parseInt(numeri[i]);
}

console.log(somma);
// Media diviso 10 numeri
console.log(somma / 10);
