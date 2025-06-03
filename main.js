/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// creo una funzione 

function wordCheck(word) {

    // inizializzo una variabile e lascio la stringa vuota
    let wordReverse = ""

    // sfrutto il ciclo for per capovolgere la parola
    for (let i = word.length - 1; i >= 0; i--) {
        const letter = word[i]
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

// creo una funzione che restituisca 'pari' o 'dispari'

function checkNumb(numb) {

    if (numb % 2 === 0) {
        return 'pari'

    } else {
        return 'dispari'

    }

}

// faccio dei prompt 

const userChoice = prompt('pari o dispari?').toLocaleLowerCase()

const userNumber = Number(prompt('Inserisci un numero'))
console.log('Il tuo numero è', userNumber)

const pcNumber = Math.floor(Math.random() * 5) + 1
console.log('Il numero del computer è', pcNumber)

// faccio la somma dei valori 
const somma = userNumber + pcNumber

// una volta ottenuta la somma, richiamo la funzione in una variabile "result"
let result = checkNumb(somma)

// faccio un confronto per dichiarare chi ha vinto 

if (result === userChoice) {
    console.log('Hai vinto!')
} else {
    console.log('Hai perso!')
}