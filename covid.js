var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('covid result: ');
if (userName == "positive") {
    console.log('go to querentine in 21 days');
}
if (userName == "negative") {
    console.log('go to anywhere')
}
if (userName == "notcheck") {
    console.log("go to quarenitine in 7 days");
}