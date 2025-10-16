console.dir(document);

// Seleziono gli elementi
const time = document.getElementById("countdown");
const istruzione = document.getElementById("instructions");
const numbers = document.getElementById("numbers-list");
const myForm = document.getElementById("answers-form");
const add_numbers = document.querySelectorAll(".form-control");
const message = document.getElementById("message");
const risultato = document.getElementById("risultato");

// Genera numeri casuali
const numeri_generati = [];
for (let i = 0; i < 5; i++) {
    const numero = Math.floor(Math.random() * 50) + 1;
    numeri_generati.push(numero);
}

// Li mostra in HTML
numeri_generati.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    numbers.appendChild(li);
});

setTimeout(nascondi_numeri, 30000);

function nascondi_numeri() {
    numbers.textContent = "";
}


setTimeout(banner, 30000);

function banner() {
    myForm.classList.remove('d-none');
}

// utente invia il form
myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // evita il refresh

    const numeri_utente = [];
    add_numbers.forEach(input => {
        numeri_utente.push(Number(input.value));
    });



    // Confronto numeri utente e numeri generati
    const indovinati = [];
    // Creiamo un array "indovinati" per salvare i numeri corretti inseriti dall’utente.

    for (let i = 0; i < numeri_utente.length; i++) {
        // Ciclo su tutti i numeri inseriti dall’utente
        for (let j = 0; j < numeri_generati.length; j++) {
            // Per ogni numero dell’utente, ciclo su tutti i numeri generati dal computer
            if (numeri_utente[i] === numeri_generati[j]) {
                // Se il numero dell’utente corrisponde a uno dei numeri generati

                // Controllo per evitare duplicati nell’array "indovinati"
                let gia_presente = false;
                for (let k = 0; k < indovinati.length; k++) {
                    if (indovinati[k] === numeri_utente[i]) {
                        gia_presente = true;
                        break;
                    }
                }
                if (gia_presente === false) {
                    // Se il numero non è già presente nell'array "indovinati", lo aggiungo
                    indovinati.push(numeri_utente[i]);
                } 
            }
        }
    }
    // Creo la stringa dei numeri indovinati
    let numeri_stringa = "";

    for (let i = 0; i < indovinati.length; i++) {
        numeri_stringa += indovinati[i];
        if (i !== indovinati.length - 1) {
            numeri_stringa += ", ";
        }
    }
    // Mostro il risultato in HTML usando template literal
    if (indovinati.length > 0) {
        risultato.textContent = `Hai indovinato ${indovinati.length} numero/i: ${numeriStringa}`;
    } else {
        risultato.textContent = "Non hai indovinato nessun numero";
    }

});



