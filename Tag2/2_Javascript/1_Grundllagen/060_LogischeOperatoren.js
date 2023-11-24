
// Logische Operatoren
// Boolsche Operatoren: &&, ||, !

// && - UND (sowohl als auch)
console.log(3 >= 2 && 7 != 9);  // true
console.log((3 >= 2) && (7 != 9));  // true

// Nur true, wenn beide true sind
console.log(true && true);  // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false);  // false

// || - ODER (entweder oder)
// Nur false, wenn beide false sind
console.log(true || true);  // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false);  // false

// ! - NICHT
console.log(!(1 == 1));  // false
console.log(!true);  // false
console.log(!false);  // true


