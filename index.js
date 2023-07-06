//first time working with npm and node
//When script is called, a random dad joke is generated in rainbow text
const colors = require("colors");
const jokes = require("give-me-a-joke");
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});