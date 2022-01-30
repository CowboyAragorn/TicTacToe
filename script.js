//Create module of gameboard as an array inside of an object//
const gameBoard = ( () => {
//Sets up the board and the array that controls the array with text in it//
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



const player = (name) => {
    let playerName = () => name;
    return { playerName }
}


const player1 = player('Malcolm X');
const player2 = player('Jackie O');



const game = (() => {
    let square1 = document.querySelector('#one')
    let square2 = document.querySelector('#two')
    let square3 = document.querySelector('#three')
    let square4 = document.querySelector('#four')
    let square5 = document.querySelector('#five')
    let square6 = document.querySelector('#six')
    let square7 = document.querySelector('#seven')
    let square8 = document.querySelector('#eight')
    let square9 = document.querySelector('#nine')
    squareListeners()
    
    function squareListeners(){
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
    }
    
    
    let player = true;

    function addMark(x){
        if (player == true){
            x.innerText = 'x';
            x.value = 1;
            player = false;
        }
        else if (player == false) {
            x.innerText = 'o';
            x.value = 2;
            player = true;
        }
        x.disabled = true;
        gameBoard.addToBoard();
        victory();
    }

    
    function victory() {
        //horizontals//
        if (square1.value == 1 && square2.value == 1 && square3.value == 1) {
            console.log(player1.playerName() + ' wins!')
            reset()
        }
        else if (square1.value == 2 && square2.value == 2 && square3.value == 2) {
            console.log(player2.playerName() + ' wins!')
            reset()
        }
        else if (square4.value == 1 && square5.value == 1 && square6.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square4.value == 2 && square5.value == 2 && square6.value == 2) {
            console.log('o wins!')
            reset()
        }
        else if (square7.value == 1 && square8.value == 1 && square9.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square7.value == 2 && square8.value == 2 && square9.value == 2) {
            console.log('o wins!')
            reset()
        }

        //verticals//
        else if (square1.value == 1 && square4.value == 1 && square7.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square1.value == 2 && square4.value == 2 && square7.value == 2) {
            console.log('o wins!')
            reset()
        }
        else if (square2.value == 1 && square5.value == 1 && square8.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square2.value == 2 && square5.value == 2 && square8.value == 2) {
            console.log('o wins!')
            reset()
        }
        else if (square3.value == 1 && square6.value == 1 && square9.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square3.value == 2 && square6.value == 2 && square9.value == 2) {
            console.log('o wins!')
            reset()
        }
        //diagonals//
        else if (square1.value == 1 && square5.value == 1 && square9.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square1.value == 2 && square5.value == 2 && square9.value == 2) {
            console.log('o wins!')
            reset()
        }
        else if (square3.value == 1 && square5.value == 1 && square7.value == 1) {
            console.log('x wins!')
            reset()
        }
        else if (square3.value == 2 && square5.value == 2 && square7.value == 2) {
            console.log('o wins!')
            reset()
        }
        else if (
            square1.value != 0 &&
            square2.value != 0 &&
            square3.value != 0 &&
            square4.value != 0 &&
            square5.value != 0 &&
            square6.value != 0 &&
            square7.value != 0 &&
            square8.value != 0 &&
            square9.value != 0) {
                console.log('Tie')
                reset()
        }
    }

    function reset() {
        square1.disabled = false
        square2.disabled = false
        square3.disabled = false
        square4.disabled = false
        square5.disabled = false
        square6.disabled = false
        square7.disabled = false
        square8.disabled = false
        square9.disabled = false

        square1.innerText = ''
        square2.innerText = ''
        square3.innerText = ''
        square4.innerText = ''
        square5.innerText = ''
        square6.innerText = ''
        square7.innerText = ''
        square8.innerText = ''
        square9.innerText = ''

        square1.value = ''
        square2.value = ''
        square3.value = ''
        square4.value = ''
        square5.value = ''
        square6.value = ''
        square7.value = ''
        square8.value = ''
        square9.value = ''

        gameBoard.addToBoard()

    }


    /* for easy copy paste
        square1
        square2
        square3
        square4
        square5
        square6
        square7
        square8
        square9
        */
})();




player1.playerName();
player2.playerName();


function inputs(){
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        let input = document.querySelector("#inputText").value;
        gameBoard.addToBoard(input)
    }
    )
}

