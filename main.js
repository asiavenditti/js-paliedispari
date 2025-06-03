/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// creo una funzione 

function wordCheck(word) {

    // inizializzo una variabile e lascio la stringa vuota
    let wordReverse = ""

    // sfrutto il ciclo for per capovolgere la parola
    for (let i = word.length - 1; i >= 0; i--) {
        let letter = word[i]
        wordReverse = wordReverse + letter


    }

    return wordReverse

}
// chiedo all'utente di inserire la parola
let word = prompt('Inserisci una parola')

// richiamo la funzione
let reversed = wordCheck(word)

// faccio il confronto tra le due parole per vedere se è palindroma

if (reversed === word) {
    console.log(reversed, 'è un palindromo')

}
else {
    console.log(word, 'non è un palindromo')
}



/* Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */