
const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
   ]

// Array of titles
let titles = [
    'Harry Potter', 
    'Just Go With It',
    'Never Back Down',
    'Spongebob Squarepants',
    '50 First Dates',
    'Cars',
    'Spiderman',
    'The Wolf of Wall Street',
    'Inception',
    'Peter Pan',
    'The Lord of the Rings'
]

// Array of explanations
let explanations = [
    'This movie is about a dude with a stick...',
    'This movie is about people who go on holiday...',
    'This movie is about two guys with daddy issues who beat each other up...',
    'This movie is about a rectangle...',
    'This movie is about a chick, she has the worst memory...',
    'In this movie, car go fast...',
    'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...',
    'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...',
    'In this movie everyone is like sleeping all the time...',
    'In this movie some kids die and an angel escorts them to heaven...',
    'In this movie some small guys go for a walk...'
]

// Array of hints
let hints = [
    'It\'s Magic',
    'Adam, Drew and Jennifer',
    'Kanye West - Stronger',
    'It\'s a cartoon',
    '50 times...',
    'Kachow',
    'Peta-Paka',
    'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...',
    'Dreams...',
    'Always flying, cuz he neverlands',
    'You will not vacate past this exact position'
]


let dom = document
let movieGuess = dom.querySelector('#movie-Guess');
console.log(movieGuess);
let starterExplanantion = dom.querySelector('#explanation');

// Generate random integer
let num = Math.round(Math.random() * 10);
console.log(num);

// Generate random n, get nth index of explanantions array, print explanation 
starterExplanantion.innerHTML = explanations[num];

// Disable the 'Show Hint' button
dom.querySelector("#nextQuestion").disabled=true;

// Check the guess
function checkGuess(event) {
    event.preventDefault();

    let guess = movieGuess.value;
    console.log(guess);

    if (guess == titles[num]) {
        output.innerHTML = "You are correct";
        dom.querySelector("#nextQuestion").disabled=false;
    } else {
        output.innerHTML = "You are incorrect";
    }

    movieGuess.value = '';
}

// Show hint
function showHint() {
    hint.innerHTML = hints[num];
}
