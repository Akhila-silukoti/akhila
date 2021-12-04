var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('expected date:');
var userName = readlineSync.question('expected month:');
var userName = readlineSync.question('expected year:');
var userName = readlineSync.question('return date:');
var userName = readlineSync.question('return month:');
var userName = readlineSync.question('return year:'); {
    if (userName < "expected date") {
        console.log('you need not pay the money');
    }
    if ("expected date " > "return date ") {
        console.log('pay 10000');
    }
    console.log("AkhilaSilukoti")
}