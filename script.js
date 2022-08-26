const game = (() => {
    let x = 'x';
    let o = 'oo';
    // let row1 = [1, 2, 3];
    // let row2 = [4, 5, 6];
    // let row3 = [7, 8, 9];
    // const gameboard = [row1, row2, row3];
    const gameboard = ['','','','','','','','',''];
    let moveCounter = 0;

    const checkWinCondition = () => {
        ++moveCounter;
        console.log(moveCounter);
        if (moveCounter >= 5){
            if (
                ((gameboard[0]==gameboard[1]) && (gameboard[1]==gameboard[2]) && (gameboard[0] != '')) ||
                ((gameboard[3]==gameboard[4]) && (gameboard[4]==gameboard[5]) && (gameboard[3] != '')) ||
                ((gameboard[6]==gameboard[7]) && (gameboard[7]==gameboard[8]) && (gameboard[6] != ''))) {
                    console.log('game over horizontal')
            } else if (
                ((gameboard[0]==gameboard[3]) && (gameboard[3]==gameboard[6]) && (gameboard[0] != '')) ||
                ((gameboard[1]==gameboard[4]) && (gameboard[4]==gameboard[7]) && (gameboard[1] != '')) ||
                ((gameboard[2]==gameboard[5]) && (gameboard[5]==gameboard[8]) && (gameboard[2] != ''))) {
                    console.log('game over vertical')
            } else if (
                ((gameboard[0]==gameboard[4]) && (gameboard[4]==gameboard[8]) && (gameboard[4] != '')) ||
                ((gameboard[2]==gameboard[4]) && (gameboard[4]==gameboard[6]) && (gameboard[4] != ''))) {
                    console.log('game over diagonal')
            } else if (
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
    });

    // return {cells}
})();