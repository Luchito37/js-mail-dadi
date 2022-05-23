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

Math.round(Math.random()*5)+1;


Esercizio Bonus: la coda dell’array
Creare un array con un numero a piacere di elementi.
Stampare a schermo, con un ciclo, gli ultimi 5 elementi dell’array.
Attenzione #1: quanti elementi minimo dovrà contenere l’array?
Attenzione #2: il ciclo deve essere costruito per estrarre gli ultimi 
elementi da qualsiasi array, anche se non conosciamo a priori quanti elementi contiene
*/

const btnCalcola = document.getElementById("btn-random-number");

let inputMoltiplicatore = document.querySelector("[name='moltiplicatore']");


console.dir(btnCalcola);
console.dir(inputMoltiplicatore);

const resultRandom = document.querySelector(".result-random");
resultRandom.innerHTML = "";

const resultRandomCp = document.querySelector(".result-random-cp");
resultRandomCp.innerHTML = "";

btnCalcola.addEventListener("click", function () {
    // controllo che il click funzioni correttamente
    console.log("Pulsante calcola cliccato");

    for(let i = 1; i <= 6; i++){
        let inputMoltiplicatore = Math.round(Math.random()*5)+1;
        console.log(inputMoltiplicatore);


        resultRandom.innerHTML += `<li>${inputMoltiplicatore}</li>`;
        resultRandomCp.innerHTML += `<li>${inputMoltiplicatore}</li>`;
    }
    
}
)