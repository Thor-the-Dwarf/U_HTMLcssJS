// var (veraltet, weniger sicher, nicht empfohlen, global)
var alteVariable = "Ich bin eine alte Variable";
console.log(alteVariable); // Ausgabe: "Ich bin eine alte Variable"

// let (variabel und block-scoped)
let variable = "Ich bin variabel";
variable = "Deswegen kann ich verändert werden";
console.log(variable); // Ausgabe: "Ich bin eine Variable"

// const (konstant und block-scoped)
const konstante = "Ich bin konstant und kann nicht verändert werden";
// konstante = "Neuer Wert"; // Uncaught TypeError: Assignment to constant variable.
console.log(konstante); // Ausgabe: "Ich bin konstant"

// Block-Scoped Beispiel
if (true) {
    var x = 1; // x ist hier und außerhalb des Blocks sichtbar
    let y = 2; // y ist nur innerhalb dieses Blocks sichtbar
    const z = 3; // z ist nur innerhalb dieses Blocks sichtbar
}

console.log(x); // Ausgabe: 1
// console.log(y); // Fehler: y ist nicht definiert
// console.log(z); // Fehler: z ist nicht definiert
