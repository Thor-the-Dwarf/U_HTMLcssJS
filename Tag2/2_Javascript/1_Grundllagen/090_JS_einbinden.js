// Externe Funktion
function sayHello() {
    alert('Externe: Hallo Welt!');
}

// Funktion zum Wechseln der Div-Farbe
function toggleColor() {
    var div = document.getElementById("myDiv");
    if (div.style.backgroundColor === "red") {
        div.style.backgroundColor = "blue";
    } else {
        div.style.backgroundColor = "red";
    }
}
