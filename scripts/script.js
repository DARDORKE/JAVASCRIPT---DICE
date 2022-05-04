// NEW GAME FUNCTION
function newGame(){
    initScore();
    initStyle();
    startedGame = true;
    currentPlayer = 0;
}

// RESET SCORES FUNCTION
function initScore() {
    players[0].currentScore = 0;
    players[1].currentScore = 0;
    players[0].globalScore = 0;
    players[1].globalScore = 0;
    globalScoreP1.innerHTML = '0';
    globalScoreP2.innerHTML = '0';
    currentScoreP1.innerHTML = '0';
    currentScoreP2.innerHTML = '0';
}

// CHANGE TURN FUNCTION
function changeTurn() {
    document.getElementById('dot' + (currentPlayer+1)).classList.add('invisible');
    document.getElementById('playerName' + (currentPlayer+1)).classList.remove('currentPlayer');
    document.getElementById('currentTextP' + (currentPlayer+1)).classList.remove('currentPlayer');
    document.getElementById('globalScoreP' + (currentPlayer+1)).classList.remove('currentPlayer');
    document.getElementById('currentScoreP' + (currentPlayer+1)).classList.remove('currentPlayer');
    currentPlayer = + !currentPlayer;
    changeBackground();
    currentPlayerStyle();
}

// CHANGE BACKGROUND
function changeBackground() {
    if(currentPlayer === 0){
        container.style.background = 'linear-gradient(to right, #eeeeee 50%, white 50%)'; //Player 1 TURN
    }
    else {
        container.style.background = 'linear-gradient(to right, white 50%, #eeeeee 50%)'; //Player 2 TURN
    }
}

// RESET CSS STYLE FUNCTION
function initStyle(){
    document.getElementById('playerName1').classList.add('currentPlayer');
    document.getElementById('currentTextP1').classList.add('currentPlayer');
    document.getElementById('dot1').classList.remove('invisible');
    document.getElementById('globalScoreP1').classList.add('currentPlayer');
    document.getElementById('currentScoreP1').classList.add('currentPlayer');
    document.getElementById('playerName2').classList.remove('currentPlayer');
    document.getElementById('dot2').classList.add('invisible');
    document.getElementById('globalScoreP2').classList.remove('currentPlayer');
    document.getElementById('currentScoreP2').classList.remove('currentPlayer');
    document.getElementById('currentTextP2').classList.remove('currentPlayer');
    container.style.background = 'linear-gradient(to right, #eeeeee 50%, white 50%)'; //Player 1 TURN
}

//ROLL FUNCTION
function roll() {
    dice.classList.add('shake'); // DICE ANIMATION
    let diceValue = Math.floor(Math.random() * 6) + 1;
    setTimeout(function() {
        dice.src = 'images/dice-'+ diceValue + '.svg';
        dice.classList.remove(('shake')); // DICE ANIMATION STOP
        if (diceValue === 1) {
            players[currentPlayer].currentScore = 0;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
            changeTurn();
        }
        else {
            players[currentPlayer].currentScore += diceValue;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
        }
    }, 500);
}

//HOLD FUNCTION
function hold() {
    players[currentPlayer].globalScore += players[currentPlayer].currentScore;
    players[currentPlayer].currentScore = 0;
    document.getElementById('globalScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].globalScore;
    document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
    if(players[currentPlayer].globalScore >= 100){
        alert(players[currentPlayer].name + ' WINS THIS GAME');
        window.location.reload();
    } else {
        changeTurn();
    }
}

//STYLE SWAP FUNCTION
function currentPlayerStyle (){
    document.getElementById('dot' + (currentPlayer+1)).classList.remove('invisible');
    document.getElementById('playerName' + (currentPlayer+1)).classList.add('currentPlayer');
    document.getElementById('currentTextP' + (currentPlayer+1)).classList.add('currentPlayer');
    document.getElementById('globalScoreP' + (currentPlayer+1)).classList.add('currentPlayer');
    document.getElementById('currentScoreP' + (currentPlayer+1)).classList.add('currentPlayer');
}

//INIT PLAYERS
let players = [
    {
        name: 'PLAYER 1',
        currentScore : 0,
        globalScore : 0
    },
    {
        name: 'PLAYER 2',
        currentScore : 0,
        globalScore : 0
    }
];

//INIT CURRENT PLAYER (0 -> Turn to player1 / 1 -> Turn to player2)
let currentPlayer = 0;

// BACKGROUND STYLE
let container = document.getElementById('container');

// SCORES CONTENT
let globalScoreP1 = document.getElementById('globalScoreP1');
let globalScoreP2 = document.getElementById('globalScoreP2');
let currentScoreP1 = document.getElementById('currentScoreP1');
let currentScoreP2 = document.getElementById('currentScoreP2');

// Wait for TRUE to set game to STARTED
let startedGame = false;

// DICE INIT
let dice = document.getElementById('dice');

// NEW GAME BUTTON
let newGameButton = document.getElementById('newGame');

newGameButton.addEventListener('click', function (e){
    e.preventDefault();
    newGame();
});

// ROLL BUTTON
let rollButton = document.getElementById('rollButton');

rollButton.addEventListener('click', function (e){
    e.preventDefault();
    if((startedGame === true) && !(dice.classList.contains("shake"))){
        roll();
    }
});

//HOLD BUTTON
let holdButton = document.getElementById('holdButton');

holdButton.addEventListener('click', function (e){
    e.preventDefault();
    if((startedGame === true) && (players[currentPlayer].currentScore !== 0) && !(dice.classList.contains("shake"))){
        hold();
    }
});