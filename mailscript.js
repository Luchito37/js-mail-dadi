/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
(non usare includes() o indexOf)


Gioco dei dadi
Generare più  numeri random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
C’è forse un array da qualche parte?
Se dobbiamo confrontare qualcosa che “cosa” ci serve?


Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi 
elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene
*/

let richiestaEmail = prompt("La prego di inserire la sua email.")

console.log = (richiestaEmail);

const emailPartecipanti = ["lucamatteotti01@gmail.com", "matteoricciardi@gmail.com", "ritaritocca98@gmail.com", "agamennone90@gmail.com", "pincopallo@gmail.com"]

const elemento1 = emailPartecipanti[0]
const elemento2 = emailPartecipanti[1]
const elemento3 = emailPartecipanti[2]
const elemento4 = emailPartecipanti[3]
const elemento5 = emailPartecipanti[4]

let text = "";
let colorClass = "";

if(richiestaEmail != elemento1 && richiestaEmail != elemento2 && richiestaEmail != elemento3 && richiestaEmail != elemento4 && richiestaEmail != elemento5){
    text= "Mi dispiace avvisarla che lei risulta non essere in lista,oppure l'email che lei ha digitato non è corretta, pertanto la prego di ricaricare la pagina, oppure, contatti il numero verde in sovraimpressione.";
    colorClass= "bg-danger"
    console.log = ("testo di risposta al rifiuto");
}else{
    text= richiestaEmail.toString()
    colorClass= "bg-warning"
}

const nomiDellaLista = document.getElementById("lista-email")

nomiDellaLista.innerHTML += `<li class="${colorClass}">
                                ${text}
                            </li>`

