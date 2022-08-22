const game = (() => {
    let x = 'x';
    let o = 'o';
    let row1 = [x, o, x];
    let row2 = [x, o, x];
    let row3 = [o, x, o];
    const gameboard = [row1, row2, row3];
    
    return {
        gameboard,
        row1,
        row2,
        row3,
        o,
        x,
    };
})();

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);

    return {sayName};
};

// game.gameboard[0][0] = 4;