var readlineSync = require('readline-sync');

// Wait for user's response.
var userName = readlineSync.question('enter the name: ');
if (userName == "monday") {
    console.log("pooha")
} else if (userName == "tuesday ") {
    console.log("idly");
} else if (userName == "wednesday") {
    console.log("poori")
} else if (userName == "thursday") {
    console.log("sprouts")
} else if (userName == "friday") {
    console.log("fridrice")
} else if (userName == "saturday") {
    console.log("dosa")
} else if (userName == "sunday") {
    console.log("upma")
}