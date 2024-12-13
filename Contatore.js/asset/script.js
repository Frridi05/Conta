// Inizializza il valore del contatore
let count = 0;

// Funzione per aggiornare il display del contatore
function updateCounter(counterDisplay) {
    counterDisplay.textContent = count;
}

document.addEventListener('DOMContentLoaded', () => {
    // Seleziona gli elementi del DOM
    const counterDisplay = document.getElementById('counter');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');

    // Aggiungi l'evento click per il pulsante di diminuzione
    decreaseButton.addEventListener('click', () => {
        if (count > 0) { // Controlla che il contatore non scenda sotto zero
            count--;
            updateCounter(counterDisplay); // Passa counterDisplay come argomento
        }
    });

    // Aggiungi l'evento click per il pulsante di aumento
    increaseButton.addEventListener('click', () => {
        count++;
        updateCounter(counterDisplay); // Passa counterDisplay come argomento
    });

    // Inizializza il display del contatore
    updateCounter(counterDisplay); // Passa counterDisplay come argomento
});