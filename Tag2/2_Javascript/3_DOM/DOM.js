
// Elemente in Variablen speichern
const div_changeText = document.getElementById("changeText");
const div_changeColor = document.getElementById("changeColor");
const div_hide = document.getElementById("hide");
const div_getAll = document.getElementById("all");
const button_hide = document.getElementById("toggleVisibility");

// Ändert den Text des Elements
div_changeText.addEventListener("click", function() {
    this.innerHTML = "<strong>Text geändert</strong>";
});

// Ändert die Hintergrundfarbe des Elements zu einer zufälligen Farbe
div_changeColor.addEventListener("click", function() {
    this.style.backgroundColor = getRandomColor();
});

// Toggle die Sichtbarkeit des Elements
button_hide.addEventListener("click", function() {
    if (div_hide.style.display === "none") {
        div_hide.style.display = "flex";
    } else {
        div_hide.style.display = "none";
    }
});

// Methode, die die Hintergrundfarbe für alle Elemente zufällig setzt
div_getAll.addEventListener("click", function (){
    const elements = [div_changeText, div_changeColor, div_hide, div_getAll];
    elements.forEach(element => {
        element.style.backgroundColor = getRandomColor();
    });
})

// Funktion, die eine zufällige Farbe zurückgibt
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


