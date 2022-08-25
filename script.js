const game = (() => {
    let x = 'x';
    let o = 'oo';
    // let row1 = [1, 2, 3];
    // let row2 = [4, 5, 6];
    // let row3 = [7, 8, 9];
    // const gameboard = [row1, row2, row3];
    const gameboard = ['','','','','','','','',''];
    
    return {
        gameboard,
        o,
        x,
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