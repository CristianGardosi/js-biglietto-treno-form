// ********************************************************
// BIGLIETTO TRENO
// ********************************************************


// REFERENZA ELEMENTI PRINCIPALI DOM

// Bottoni genera / annulla
var bottoneGenera = document.getElementById('btn-genera-biglietto');
var bottoneAnnulla = document.getElementById('btn-annulla-biglietto');

// section id="biglietto"
var containerBiglietto = document.getElementById('biglietto');


// EVENTI DINAMICI

// Calcolo e generazione dinamica biglietto quando l'utente dopo aver inserito i dati clicca sul relativo bottone
bottoneGenera.addEventListener('click', function(){
console.log('click');
// Dati utente, per averli vado a prendere gli id che ho messo nella sezione html relativa alla compilazione dei vari campi di inserimento dati
// Essendo input un sel-closing tag non posso utilizzare .innerHTML, ma posso utilizzare .value che serve proprio in questi casi
var nome = document.getElementById('nome').value;
console.log(nome)

var kmDaPercorrere = document.getElementById('km').value;
console.log(kmDaPercorrere)

var fasciaEtà = document.getElementById('fascia-età').value;
console.log(fasciaEtà)

// Ora devo valutare le varie situazioni (km, minorenne, maggiorenne, over65)  calcolando di conseguenza costi e offerta
var prezzoKm = 0.21;
var costoBiglietto = prezzoKm * kmDaPercorrere;

// Setto il mio default, in questo caso senza scontistiche
var offerta = 'Biglietto Standard';

if (fasciaEtà == 'minorenne') {
    costoBiglietto -= costoBiglietto * 0.2;
    offerta = 'Sconto minorenni del 20%';
}

else if (fasciaEtà == 'over65') {
    costoBiglietto -= costoBiglietto * 0.4;
    offerta = 'Sconto over65 del 40%';
}
// Gestione decimali valuta (2 decimali)
costoBiglietto = costoBiglietto.toFixed(2) + ' $';

// Generazione randomica del numero di carrozza da 1 a 10 
var numeroCarrozza = Math.floor( Math.random() * 10 ) + 1;
// Generazione randomica del numero di cambio prenotazione da 9000 a 10000, va letto come 10000-9000 ci da il risultato del range entro cui stare e il + 9000 indica da dove partire la generazione randomica il tutto ha come risultato 'da 9000 a 10000'
var numeroCambioPrenotazione = Math.floor( Math.random() *  (10000 - 9000 ) ) + 9000;

// Ora inseriamo i valori ricavati nella span che avevamo precedentemente creato in HTML

document.getElementById('nome-passeggero').innerHTML = nome;

document.getElementById('offerta-applicata').innerHTML = offerta;

document.getElementById('carrozza').innerHTML = numeroCarrozza;

document.getElementById('codice-cambio-prenotazione').innerHTML = numeroCambioPrenotazione;

document.getElementById('costo').innerHTML = costoBiglietto;


// RENDERE VISIBILE IL BIGLIETTO DOPO TUTTO L'INSERIMENTO DATI
// Vado a riprendermi la classe utility che ho creato all'inizio del mio foglio JS e che ho associato alla relativa classe HTML che fa da container all'intero contenuto del biglietto
containerBiglietto.className = 'show'

});


