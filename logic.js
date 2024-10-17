const players = ['x', 'o'];
let xIsActivePlayer = true;
let playingBorder = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

function startGame() {
    renderBoard(playingBorder);
}

function click(row, col) {
    playingBorder[row][col] = xIsActivePlayer ? 'x' : 'o';
    xIsActivePlayer = !xIsActivePlayer;
    renderBoard(playingBorder);
    checkWinner();
}

function updatingVariables() {
    uniqueValues = [];
    countNonEmpty = 0;
}

function checkWinner() {
    for (let row of playingBorder) {
        updatingVariables();
        
        for (let item of row) {
            if (item != '') {
                countNonEmpty += 1
            }
            uniqueValues.push(item);
        }
        if (countNonEmpty == 3 && new Set(uniqueValues).size == 1) {
            const winner = uniqueValues[0];
            showWinner(winner);
            break;
        }
    }

    for (let i = 0; i < 3; i++) {
        updatingVariables();
        
        for (let j = 0; j < 3; j++) {
            if (playingBorder[j][i] != '') {
                countNonEmpty += 1
            }
            uniqueValues.push(playingBorder[j][i]);
        }
        if (countNonEmpty == 3 && new Set(uniqueValues).size == 1) {
            const winner = uniqueValues[0];
            showWinner(winner);
            break;
        }
    }
    
    updatingVariables();
    for (let i = 0; i < 3; i++) {
        uniqueValues.push(playingBorder[i][i]);
        
        if (playingBorder[i][i] != '') {
            countNonEmpty += 1
        }
        
        if (countNonEmpty == 3 && new Set(uniqueValues).size == 1) {
            const winner = uniqueValues[0];
            showWinner(winner);
            break;
        }
    }
    
    updatingVariables();
    for (let i = 0; i < 3; i++) {
        uniqueValues.push(playingBorder[2-i][i]);
        
        if (playingBorder[2-i][i] != '') {
            countNonEmpty += 1
        }
        
        if (countNonEmpty == 3 && new Set(uniqueValues).size == 1) {
            const winner = uniqueValues[0];
            showWinner(winner);
            break;
        }
    }
}

// нужна функция для возобновления игры