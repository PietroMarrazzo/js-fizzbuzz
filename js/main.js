var database = [];

// riempio il database di numeri, da 1 a 100
for (var i=1; i <= 100; i++) {
    

    // se il numero è divisibile per 3 e 5 allora aggiungo fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
        database.push('fizzbuzz');
    } 
    // altrimenti controlo se è divisibile solo pr 3
    else if (i % 3 === 0) {
        database.push('fizz')
    }
    // altrimenti controllo se è divisibile per 5
    else if (i % 5 === 0) {
        database.push('buzz')
    } 
    // se non è divisibile per 3 o 5, allora aggiungo il valore i 
    database.push(i);

}

console.log(database);