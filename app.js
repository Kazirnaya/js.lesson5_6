// JavaScript source code
'use strict'
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const figures = {
    '0,0': '♜',
    '0,1': '♞',
    '0,2': '♝',
    '0,3': '♛',
    '0,4': '♚',
    '0,5': '♝',
    '0,6': '♞',
    '0,7': '♜',
    '1,0': '♟',
    '1,1': '♟',
    '1,2': '♟',
    '1,3': '♟',
    '1,4': '♟',
    '1,5': '♟',
    '1,6': '♟',
    '1,7': '♟',
    '6,0': '♙',
    '6,1': '♙',
    '6,2': '♙',
    '6,3': '♙',
    '6,4': '♙',
    '6,5': '♙',
    '6,6': '♙',
    '6,7': '♙',
    '7,0': '♖',
    '7,1': '♘',
    '7,2': '♗',
    '7,3': '♕',
    '7,4': '♔',
    '7,5': '♗',
    '7,6': '♘',
    '7,7': '♖',
};

numbers.reverse().forEach(function (num, numIndex) {
    const row = document.createElement('div');
    row.classList.add('row');
    document.body.appendChild(row);
    const title = document.createElement('div');
    title.innerText = num;
    row.appendChild(title);

    chars.forEach(function (char, charIndex) {
        const cell = document.createElement('div');
        const isWhite = (numIndex + charIndex) % 2 === 0;
        cell.classList.add(isWhite ? 'white' : 'black');
        cell.innerText = figures[`${numIndex},${charIndex}`] || '';
        row.appendChild(cell);
    })
})
const row = document.createElement('div');
row.classList.add('row', 'charRow');
chars.forEach(function (char, charIndex) {
    const charCell = document.createElement('div');
    charCell.classList.add('charCell');
    charCell.innerText = char;
    
    row.appendChild(charCell);
})
document.body.appendChild(row);

