// Dateiname:Botseite.js
// Hardcodierte Frage-Antwort-Paare mit Auswahlmöglichkeiten


    qaPairs = [
        { Bot: 'Bist du bereits Kunde?', entweder: 'ja', oder:'nein'},
        { Bot: 'Wollen Sei ein Konto eröffnen?', entweder: 'ja', oder:'nein'},
        { Bot: 'Welche Produkte bietet Ihr Unternehmen an?', entweder: 'ja', oder: 'nein' },
        { Bot: 'Wie kann ich den Kundendienst kontaktieren?', entweder: 'ja', oder: 'nein' }
    ];

    activQA = 0;

function initializeChatBot() {
    this.appendMessage("bot","Herzlich willkommen bei VSP!");
    this.botMessage();
}

    // constructor() {
    //     this.appendMessage("bot", "Herzlich willkommen bei VSP!");
    //     this.botMessage();
    // }

function botMessage(){
        this.appendMessage("bot", this.qaPairs[this.activQA].Bot);
    }



function userMessage() {
        var userInput = document.getElementById('user-input').value;

        // Füge die Benutzerfrage dem Chat hinzu
        this.appendMessage("user", userInput);

        if(userInput == this.qaPairs[this.activQA].entweder){
            this.entwederTiped();
        }
        else if ( userInput == this.qaPairs[this.activQA].oder){
            this.oderTiped();
        }
         else {
            this.appendMessage("bot","Das Habe ich nicht verstanden.")
            this.appendMessage("bot","Antworten Sie mit " + this.qaPairs[this.activQA].entweder
            + " oder " + this.qaPairs[this.activQA].oder)
        }

        document.getElementById('user-input').value = "";
    }

function entwederTiped(){
    // hier nachricht Einfügen die der Bot senden Soll, durch Verändern des activQA
    switch (activQA) {
        case 0:
            activQA = 1;
            break;
        case 1:
            activQA = 0;
            break;
        // Sie können beliebig viele case-Blöcke hinzufügen
        default:
        // Anweisungen, die ausgeführt werden, wenn keiner der case-Blöcke zutrifft
    }
    botMessage();


}
function oderTiped(){
    // hier nachricht Einfügen die der Bot senden Soll, durch Verändern des activQA
    switch (activQA) {
        case 0:
            activQA = 2;
            break;
        case 1:
            activQA = 3;
            break;
        // Sie können beliebig viele case-Blöcke hinzufügen
        default:
        // Anweisungen, die ausgeführt werden, wenn keiner der case-Blöcke zutrifft
    }
    botMessage();

}

function appendMessage(sender, message) {
    var chatBox = document.getElementById('chat-box');
    var messageElement = document.createElement('div');
    messageElement.className = sender === 'bot' ? 'message-bot' : 'message-user';
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
}



// Sobald die HTML-Verbindung steht. Wird diese Methode aufgerufen
// window.onload = () => new ChatBot();
