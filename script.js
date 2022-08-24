const game = (() => {
    let x = 'x';
    let o = 'oo';
    // let row1 = [1, 2, 3];
    // let row2 = [4, 5, 6];
    // let row3 = [7, 8, 9];
    // const gameboard = [row1, row2, row3];
    const gameboard = [1, 2, 3, '', 5, '', 7, 8, 9];
    
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
        if (game.gameboard[i] != ' ') {
            let square = document.createElement('div');
            square.className = 'cell';
            square.setAttribute('value', i + 1);
            square.innerText = game.gameboard[i];
            container.append(square);
        };
    };
    
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            console.log(cell.textContent);
            cell.innerText = game.o;
        });
    });

    // return {cells}
})();