// Chiedo due parole in successione

var parola1 = prompt("Dammi la prima parola");

var parola2 = prompt("Dammi la seconda parola");

// Tramite length determino quale sia la parola piu corta

if (parola1.length > parola2.length) {
  console.log(parola2, parola1);
} else {
  console.log(parola1, parola2);
}
