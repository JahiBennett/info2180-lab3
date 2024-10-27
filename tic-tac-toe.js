//Exercise 1
document.addEventListener('DOMContentLoaded', function(){
});

document.addEventListener('DOMContentLoaded' , function(){
    const gameBOARD = document.getElementById('board');
    const squares = gameBOARD.querySelectorAll('div');

    squares.forEach(square => {
        square.classList.add('square');
    });
});

//Exercise 2
document.addEventListener('DOMContentLoaded', function(){
    const gameBOARD = document.getElementById('board');
    const squares = gameBOARD.querySelectorAll('div');

    let currentPlayer = 'X';

    const gameSTATE = Array(9).fill(null);

    squares.forEach((square, index)=>{
        square.classList.add('square');

        square.addEventListener('click', function() {
            // Check if the square is already clicked
            if (!gameState[index]) {
                // Update the game state
                gameState[index] = currentPlayer;

                // Add the 'X' or 'O' class for styling
                square.classList.add(currentPlayer);

                // Set the text content to 'X' or 'O'
                square.textContent = currentPlayer;

                // Switch player for the next turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    })
});

//Exercise 3
document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('board');
    const squares = gameBoard.querySelectorAll('div');

    let currentPlayer = 'X';
    const gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('mouseover', function() {
            if (!gameState[index]) {
                square.classList.add('hover');
            }
        });

        
        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });

      
        square.addEventListener('click', function() {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;

                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});

//Exercise 4
document.addEventListener('DOMContentLoaded', function() {
    const board = document.getElementById('board').querySelectorAll('div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');

    let currentPlayer = 'X';
    let gameState = Array(9).fill(null);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    function checkWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a]; 
            }
        }
        return null; 
    }

    board.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('click', function() {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;

                
                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add('you-won');
                    return;
                }

                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Reset game on New Game button click
    newGameButton.addEventListener('click', function() {
        gameState = Array(9).fill(null);
        currentPlayer = 'X';
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
        
        board.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('board');
    const squares = gameBoard.querySelectorAll('div');
    const statusDiv = document.getElementById('status');

    
    const gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('mouseover', function() {
            if (!gameState[index]) {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });

        square.addEventListener('click', function() {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;

                // Check if there's a winner
                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add('you-won');
                    return; 
                }

                // Switch player
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});


//Exercise 5
document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('board');
    const squares = gameBoard.querySelectorAll('div');
    const statusDiv = document.getElementById('status');
    const newGameButton = document.getElementById('btn');

    
    let gameState = Array(9).fill(null);

    squares.forEach((square, index) => {
        square.classList.add('square');

        square.addEventListener('mouseover', function() {
            if (!gameState[index]) {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });

        square.addEventListener('click', function() {
            if (!gameState[index]) {
                gameState[index] = currentPlayer;
                square.classList.add(currentPlayer);
                square.textContent = currentPlayer;

                const winner = checkWinner();
                if (winner) {
                    statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
                    statusDiv.classList.add('you-won');
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    // Add event listener to the New Game button
    newGameButton.addEventListener('click', function() {
        // Reset game state
        gameState = Array(9).fill(null);

        // Clear each square
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
        });

        // Reset the status message
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');
    });
});