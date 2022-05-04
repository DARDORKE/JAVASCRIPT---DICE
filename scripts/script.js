function initGame(){
    currentPlayer = 0;
    players[0].currentScore = 0;
    players[1].currentScore = 0;
    players[0].globalScore = 0;
    players[1].globalScore = 0;
    globalScoreP1.innerHTML = '0';
    globalScoreP2.innerHTML = '0';
    currentScoreP1.innerHTML = '0';
    currentScoreP2.innerHTML = '0';
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
    startedGame = true;
}

let players = [
    {
        name: 'player1',
        currentScore : 0,
        globalScore : 0
    },
    {
        name: 'player2',
        currentScore : 0,
        globalScore : 0
    }
];


//if currentPlayer = 0 -> Turn to player1 / currentPlayer = 1 -> Turn to player2
let currentPlayer = 0;

// Scores content
let globalScoreP1 = document.getElementById('globalScoreP1');
let globalScoreP2 = document.getElementById('globalScoreP2');
let currentScoreP1 = document.getElementById('currentScoreP1');
let currentScoreP2 = document.getElementById('currentScoreP2');

// NewGame Button
let newGameButton = document.getElementById('newGame');
let startedGame = false; // wait for init to start

newGameButton.addEventListener('click', function (e){
    e.preventDefault();
    initGame();
});

// Roll Button
let rollButton = document.getElementById('rollButton');
let dice = document.getElementById('dice');


rollButton.addEventListener('click', function (e){
    e.preventDefault();
    if(startedGame === true){
        let diceValue = Math.floor(Math.random() * 6) + 1;
        dice.src = 'images/dice-'+ diceValue + '.svg';
        if (diceValue === 1) {
            players[currentPlayer].currentScore = 0;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
            document.getElementById('dot' + (currentPlayer+1)).classList.add('invisible');
            document.getElementById('playerName' + (currentPlayer+1)).classList.remove('currentPlayer');
            document.getElementById('currentTextP' + (currentPlayer+1)).classList.remove('currentPlayer');
            document.getElementById('globalScoreP' + (currentPlayer+1)).classList.remove('currentPlayer');
            document.getElementById('currentScoreP' + (currentPlayer+1)).classList.remove('currentPlayer');
            currentPlayer = + !currentPlayer;
            document.getElementById('dot' + (currentPlayer+1)).classList.remove('invisible');
            document.getElementById('playerName' + (currentPlayer+1)).classList.add('currentPlayer');
            document.getElementById('currentTextP' + (currentPlayer+1)).classList.add('currentPlayer');
            document.getElementById('globalScoreP' + (currentPlayer+1)).classList.add('currentPlayer');
            document.getElementById('currentScoreP' + (currentPlayer+1)).classList.add('currentPlayer');
        }
        else {
            players[currentPlayer].currentScore += diceValue;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
        }
    }
});


