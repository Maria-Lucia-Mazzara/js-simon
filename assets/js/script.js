console.dir(document);

// collegamento classi
const time = document.getElementById("countdown");
const istruzione = document.getElementById("instructions");
const numbers = document.getElementById("numbers-list");
const myForm = document.getElementById("answers-form");
const add_numbers = document.querySelectorAll(".form-control");
const btn = document.querySelector(".btn");
const risultato_html = document.getElementById("risultato");

// insrisco numeri alla classe numbers-list

//creo array con i numeri da inserire all'interno di ul
const numeri_generati = []; // creo un array vuoto

for (let i = 0; i < 5; i++) { // ripete 5 volte
  let numero = Math.floor(Math.random() * 6); // genera numero da 0 a 5
  numeri_generati.push(numero); // lo aggiunge all'array
  console.log(numero); // mostra ogni numero singolo
}

console.log(numeri_generati); // mostra l'array completo



// crea <li> per ogni numeroS
numeri_generati.forEach(num => {
    const li = document.createElement('li'); // crea un elemento <li>
    li.textContent = num;                    // scrivi dentro il numero
    numbers.appendChild(li);         // aggiungilo al <ul>
});

setTimeout(nascondi_numeri, 2000);

function nascondi_numeri() {
    numbers.textContent = "";
}


setTimeout(banner, 4000);

function banner() {
    myForm.classList.remove('d-none');
}


