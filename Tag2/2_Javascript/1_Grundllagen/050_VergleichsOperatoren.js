
// Vergleichsoperatoren
// ==, !=, <, >, <=, >=
// Ein Ausdruck mit einem Vergleichsoperator evaluiert immer zu einem Boolean (true oder false).

console.log(3 == 4);  // false
console.log(2 != 7);  // true
console.log(3 < 4);  // true
console.log(2 > 7);  // false
console.log(3 <= 3);  // true
console.log(2 >= 3);  // false

// In JavaScript können alle numerischen Typen mit == verglichen werden,
// aber es gibt auch === für strikten Vergleich (ohne Typkonvertierung):
console.log(0 == "0");  // true, weil JavaScript den String in eine Zahl umwandelt
console.log(0 === "0"); // false, weil der Typ (Number und String) nicht übereinstimmt

