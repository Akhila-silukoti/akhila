var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('ENTER CAMPUS TIMING:');
if (userName > 7.30 && userName <= 8.30) {
    console.log("breakfast");
}
if (userName > 8.31 && userName <= 12.30) {
    console.log("coding time");
}
if (userName > 12.31 && userName <= 2.00) {
    console.log("lunch");
}
if (userName > 2.01 && userName <= 4.00) {
    console.log("coding time");
}
if (userName > 4.01 && userName <= 5.00) {
    console.log("group discusion");
}
if (userName > 5.01 && userName <= 5.30) {
    console.log("walking");
}
if (userName > 5.31 && userName <= 6.00) {
    console.log(" snack");
}
if (userName > 6.01 && userName <= 8.00) {
    console.log("english");
}
if (userName > 8.01 && userName <= 9.00) {
    console.log("dinner")
}.