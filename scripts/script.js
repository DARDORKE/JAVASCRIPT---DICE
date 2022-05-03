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

<!--Scores content-->
let globalScoreP1 = document.getElementById('globalScoreP1');
let globalScoreP2 = document.getElementById('globalScoreP2');
let currentScoreP1 = document.getElementById('currentScoreP1');
let currentScoreP2 = document.getElementById('currentScoreP2');

<!--TURN MARKER-->
let dotP1 = document.getElementById('dotP1');
let dotP2 = document.getElementById('dotP2');

<!--NewGame Button-->
let newGameButton = document.getElementById('newGame');
let startedGame = false;

newGameButton.addEventListener('click', function (){
    globalScoreP1.innerHTML = '0';
    globalScoreP2.innerHTML = '0';
    currentScoreP1.innerHTML = '0';
    currentScoreP2.innerHTML = '0';
    dotP1.classList.remove('invisible');
    startedGame = true;
});

<!--Roll Button-->
let rollButton = document.getElementById('rollButton');
let dice = document.getElementById('dice');


rollButton.addEventListener('click', function (){
    if(startedGame === true){
        let diceValue = Math.floor(Math.random() * 6) + 1;
        dice.src = 'images/dice-'+ diceValue + '.svg';
        if (diceValue === 1) {
            players[currentPlayer].currentScore = 0;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
            currentPlayer = + !currentPlayer;
            ('dotP' + (currentPlayer+1)).classList.remove('invisible');
        }
        else {
            players[currentPlayer].currentScore += diceValue;
            document.getElementById('currentScoreP' + (currentPlayer+1)).innerText = players[currentPlayer].currentScore;
        }

        //document.getElementById('player' + currentPlayer).classList.remove('active');
        //document.getElementById('player' + currentPlayer).classList.add('active');


    }
});


