const game = (() => {
    let x = 'x';
    let o = 'oo';
    // let row1 = [1, 2, 3][0, 1, 2];
    // let row2 = [4, 5, 6][3, 4, 5];
    // let row3 = [7, 8, 9][6, 7, 8];
    // const gameboard = [row1, row2, row3];
    const gameboard = ['','','','','','','','',''];
    let moveCounter = 0;

    const checkWinCondition = () => {
        ++moveCounter;
        console.log(moveCounter);
        if (moveCounter >= 5){ // minimum number of overall moves for a possible win
            if ( // check for 3 in-a-row for each row
                ((gameboard[0]==gameboard[1]) && (gameboard[1]==gameboard[2]) && (gameboard[0] != '')) ||
                ((gameboard[3]==gameboard[4]) && (gameboard[4]==gameboard[5]) && (gameboard[3] != '')) ||
                ((gameboard[6]==gameboard[7]) && (gameboard[7]==gameboard[8]) && (gameboard[6] != ''))) {
                    console.log('game over horizontal')

                    if ((gameboard[0]==gameboard[1]) && (gameboard[1]==gameboard[2]) && (gameboard[0] != '')) { // first winning condition
                        console.log('row 1')
                        if (gameboard[0]==displayController.player1) { // if this row wins, then if x/o at [0] belongs to p1, then p1 wins
                            console.log('player 1 wins') // display who wins in console
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes' // gameOver if winner is found, this blocks any new moves in display module
                            console.log(displayController.gameOver)
                        } else { // otherwise p2 wins
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes';
                            console.log(displayController.gameOver)
                        }
                    } else if ((gameboard[3]==gameboard[4]) && (gameboard[4]==gameboard[5]) && (gameboard[3] != '')) {
                        console.log('row 2')
                        if (gameboard[3]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    } else {
                        console.log('row 3')
                        if (gameboard[6]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    }

            } else if ( // check for 3 in-a-row for each column
                ((gameboard[0]==gameboard[3]) && (gameboard[3]==gameboard[6]) && (gameboard[0] != '')) ||
                ((gameboard[1]==gameboard[4]) && (gameboard[4]==gameboard[7]) && (gameboard[1] != '')) ||
                ((gameboard[2]==gameboard[5]) && (gameboard[5]==gameboard[8]) && (gameboard[2] != ''))) {
                    console.log('game over vertical')

                    if ((gameboard[0]==gameboard[3]) && (gameboard[3]==gameboard[6]) && (gameboard[0] != '')) {
                        console.log('col 1')
                        if (gameboard[0]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    } else if ((gameboard[1]==gameboard[4]) && (gameboard[4]==gameboard[7]) && (gameboard[1] != '')) {
                        console.log('col 2')
                        if (gameboard[1]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    } else {
                        console.log('col 3')
                        if (gameboard[2]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    }

            } else if ( // check for 3 in-a-row diagonally
                ((gameboard[0]==gameboard[4]) && (gameboard[4]==gameboard[8]) && (gameboard[4] != '')) ||
                ((gameboard[2]==gameboard[4]) && (gameboard[4]==gameboard[6]) && (gameboard[4] != ''))) {
                    console.log('game over diagonal')

                    if ((gameboard[0]==gameboard[4]) && (gameboard[4]==gameboard[8]) && (gameboard[4] != '')) {
                        console.log('top left')
                        if (gameboard[0]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    } else {
                        console.log('top right')
                        if (gameboard[2]==displayController.player1) {
                            console.log('player 1 wins')
                            console.log(`${displayController.player1} wins`)
                            displayController.gameOver = 'yes'
                        } else {
                            console.log('player 2 wins')
                            console.log(`${displayController.player2} wins`)
                            displayController.gameOver = 'yes'
                        }
                    }

            } else if ( // tie if all cells filled without a winner
                (gameboard[0] != '') && (gameboard[1] != '') && (gameboard[2] != '') &&
                (gameboard[3] != '') && (gameboard[4] != '') && (gameboard[5] != '') &&
                (gameboard[6] != '') && (gameboard[7] != '') && (gameboard[8] != '')) {
                    console.log('game over TIE')
            };
        };
    };
    
    return {
        gameboard,
        o,
        x,
        moveCounter,
        checkWinCondition,
    };
})();

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
    // p1 = x
    // p2 = o

    return {sayName};
};

// game.gameboard[0] = 444;

const displayController = (() => {
    const container = document.getElementById('gameboard');
    for (let i = 0; i < game.gameboard.length; i++) {
        if (true) { //1 true
            let square = document.createElement('div');
            square.className = 'cell';
            // square.setAttribute('value', i + 1);
            square.setAttribute('id', i + 1);
            square.innerText = game.gameboard[i];
            container.append(square);
        };
    };
    
    const cells = document.querySelectorAll('div.cell');

    const player1 = 'x';
    const player2 = 'o';
    let plTurn = player1;
    let gameOver = 'no';
    // cells.forEach((cell) => {
    //     cell.addEventListener('click', () => {
    //         console.log(cell.textContent);
    //         cell.innerText = game.o;
    //     });
    // });

    // const cells = document.querySelectorAll('div.cell');
    cells.forEach((cell) => {
        // console.log(cell.id);
        cell.onclick = function() {
            if (displayController.gameOver == 'no') {
                if (game.gameboard[cell.id - 1] == '') {
                    // cell.style.backgroundColor = 'yellow';
                    cell.className += ' hover';
                    console.log(cell.id);
                    game.gameboard[cell.id - 1] = plTurn; // X or O
                    console.log(game.gameboard);
                    cell.innerText = game.gameboard[cell.id - 1];
                    game.checkWinCondition();
    
                    if (plTurn == player1) {
                        // cell.innerText = 'x'
                        cell.style.backgroundColor = 'yellow'
                        // console.log(plTurn)
                        plTurn = player2;
                        console.log(plTurn)
                    } else {
                        // cell.innerText = 'o'
                        cell.style.backgroundColor = 'skyblue'
                        plTurn = player1;
                        console.log(plTurn)
                    };
                };
            };
        }; 
    });

    return {
        player1,
        player2,
        plTurn,
        gameOver,
    }
})();