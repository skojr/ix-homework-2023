let dom = document
let movieGuess = dom.querySelector('#movie-Guess');
console.log(movieGuess);
let card = dom.querySelector('.card');
console.log(card);

function checkGuess(event) {
    event.preventDefault();

    const guess = movieGuess.value;
    console.log(guess);

    if (guess == 'maze runner') {
        output.innerHTML = "You are correct!";
    } else {
        output.innerHTML = "You are wrong";
    }
}

function showHint() {
    hint.innerHTML = "It stars Dylan O'brien"
}