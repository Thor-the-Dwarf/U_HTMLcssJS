
let x = 7;

// if
if (x === 7) {
    console.log("In x ist eine sieben!");
}

// if-else
if (x === 7) {
    console.log("In x ist eine sieben!");
} else {
    console.log("In x ist keine sieben!");
}

// if-else if
x = 11;
if (x === 7) {
    console.log("In x ist eine sieben!");
} else if (x === 11) {
    console.log("In x ist eine elf!");
}

// if-else if-else
x = 11;
if (x === 7) {  // WENN
    console.log("In x ist eine sieben!");
} else if (x === 11) {  // SONST WENN
    console.log("In x ist eine elf!");
} else if (x === 17) {  // SONST WENN
    console.log("In x ist eine siebzehn!");
} else {  // SONST
    console.log("In x ist keine sieben oder elf oder siebzehn!");
}

// Verschachteln
if (x !== 7) {
    if (x !== 11) {
        if (x !== 17) {
            console.log("In x ist keine sieben oder elf oder siebzehn!");
        }
    }
}
