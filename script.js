//Create module of gameboard as an array inside of an object//
const gameBoard = ( () => {
    let addToBoard = () => {
    let square1 = document.querySelector('#one').innerText;
    let square2 = document.querySelector('#two').innerText;
    let square3 = document.querySelector('#three').innerText;
    let square4 = document.querySelector('#four').innerText;
    let square5 = document.querySelector('#five').innerText;
    let square6 = document.querySelector('#six').innerText;
    let square7 = document.querySelector('#seven').innerText;
    let square8 = document.querySelector('#eight').innerText;
    let square9 = document.querySelector('#nine').innerText;
    const boardArray = [square1, square2, square3, square4, square5, square6, square7, square8, square9];
    console.log(boardArray)
    }
    return {addToBoard}
})();


const displayController = (() => {
    let square1 = document.querySelector('#one')
    let square2 = document.querySelector('#two')
    let square3 = document.querySelector('#three')
    let square4 = document.querySelector('#four')
    let square5 = document.querySelector('#five')
    let square6 = document.querySelector('#six')
    let square7 = document.querySelector('#seven')
    let square8 = document.querySelector('#eight')
    let square9 = document.querySelector('#nine')

    let player1 = true;

    function addMark(x){
        if (player1 == true){
            x.innerText = 'x';
            player1 = false;
        }
        else if (player1 == false) {
            x.innerText = 'o';
            player1 = true;
        }
        gameBoard.addToBoard();

        x.disabled = true;
    }


    square1.addEventListener('click', () => {
        addMark(square1);
    })
    square2.addEventListener('click', () => {
        addMark(square2);
    })
    square3.addEventListener('click', () => {
        addMark(square3);
    })
    square4.addEventListener('click', () => {
        addMark(square4);
    })
    square5.addEventListener('click', () => {
        addMark(square5);
    })
    square6.addEventListener('click', () => {
        addMark(square6);
    })
    square7.addEventListener('click', () => {
        addMark(square7);
    })
    square8.addEventListener('click', () => {
        addMark(square8);
    })
    square9.addEventListener('click', () => {
        addMark(square9);
    })
})();





/*
let one = document.querySelector('#one');
one.innerText = 'ello';
gameBoard.addToBoard()

let two = document.querySelector('#two');
two.innerText = 'chap';

gameBoard.addToBoard()

*/




function inputs(){
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        let input = document.querySelector("#inputText").value;
        gameBoard.addToBoard(input)
    }
    )
}

