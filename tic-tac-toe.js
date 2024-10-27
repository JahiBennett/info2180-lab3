//Exercise 1
document.addEventListener('DOMContentLoaded', function(){
});

document.addEventListener('DOMContentLoaded' , function(){
    const gameBOARD = document.getElementById('game-board');
    const squares = gameBOARD.querySelectorAll('div');

    squares.forEach(square => {
        square.classList.add('square');
    });
});

//Exercise 2
document.addEventListener('DOMContentLoaded', function(){
    const gameBOARD = document.getElementById('game-board');
    const squares = gameBOARD.querySelectorAll('div');

    let Player_1 = 'X';

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