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