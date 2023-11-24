
// Schleifen in JavaScript: for und while

// for-Schleife: Wird für Iterationen in einer Sequenz (Array, Objekt, String) verwendet.
console.log("Beispiel für for-Schleife:");
for (let i = 0; i < 5; i++) {  // i geht von 0 bis 4
    console.log(i);  // Dies wird 5 Mal ausgeführt
}

// Ein weiteres Beispiel mit einem Array
const fruits = ["Apfel", "Banane", "Kirsche"];
for (let bratwurst of fruits) {
    console.log(bratwurst);
}

// while-Schleife: Wird für Iterationen ausgeführt, solange eine Bedingung wahr ist.
console.log("\nBeispiel für while-Schleife:");
let count = 0;
while (count < 5) {
    console.log(count);  // Dies wird 5 Mal ausgeführt
    count++;  // Erhöhe den Wert von count um 1
}
//
// // Manchmal kann man `break` und `continue` in Schleifen verwenden
console.log("\nBeispiel für break und continue:");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Beendet die Schleife
    }
    console.log(i);  // Dies wird nur für i = 0 und i = 1 ausgeführt
}
//
// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue;  // Überspringt die Iteration für i = 2
//     }
//     console.log(i);  // Dies wird für i = 0, 1, 3, 4 ausgeführt
// }
//
// // For-Of-Schleife iteriert durch den ganzen Array
// console.log("die For-Of-Schleife")
// for( let bratwurst of fruits){
//     console.log(bratwurst)
// }

