const jokes1 = require("give-me-a-joke");
var colors = require('colors');
var giveMeAJoke = require('give-me-a-joke');
 
var figlet = require('figlet');
 
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});

// To get a random dad joke
// giveMeAJoke.getRandomDadJoke (function(joke) {
//      console.log(joke.rainbow);
// });