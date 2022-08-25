const game = (() => {
    let x = 'x';
    let o = 'oo';
    // let row1 = [1, 2, 3];
    // let row2 = [4, 5, 6];
    // let row3 = [7, 8, 9];
    // const gameboard = [row1, row2, row3];
    const gameboard = [1, 2, 3, ' ', 5, ' ', 7, 8, 9];
    
    return {
        gameboard,
        o,
        x,
    };
})();

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);

    return {sayName};
};

// game.gameboard[0] = 444;

const displayController = (() => {
    const container = document.getElementById('gameboard');
    for (let i = 0; i < game.gameboard.length; i++) {
        if (game.gameboard[i] != '') { //1 true
            let square = document.createElement('div');
            square.className = 'cell';
            // square.setAttribute('value', i + 1);
            square.setAttribute('id', i + 1);
            square.innerText = game.gameboard[i];
            container.append(square);
        };
    };
    
    const cells = document.querySelectorAll('.cell');
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
            cell.style.backgroundColor = 'yellow';
            console.log(cell.id);
            game.gameboard[cell.id - 1] = Number(cell.id) + 10 + 't'; // X or O
            console.log(game.gameboard);
            cell.innerText = game.gameboard[cell.id - 1];
        }; 
    });

    // return {cells}
})();