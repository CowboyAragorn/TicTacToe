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


//const player1 = player('Malcolm X');
//const player2 = player('Jackie O');

let player1
let player2

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
    
    
    
    //adds all the event listeners for the site at once//
    function squareListeners(){
        square1.addEventListener('click', () => {
            addMarkAndChangeTurn(square1);
        })
        square2.addEventListener('click', () => {
            addMarkAndChangeTurn(square2);
        })
        square3.addEventListener('click', () => {
            addMarkAndChangeTurn(square3);
        })
        square4.addEventListener('click', () => {
            addMarkAndChangeTurn(square4);
        })
        square5.addEventListener('click', () => {
            addMarkAndChangeTurn(square5);
        })
        square6.addEventListener('click', () => {
            addMarkAndChangeTurn(square6);
        })
        square7.addEventListener('click', () => {
            addMarkAndChangeTurn(square7);
        })
        square8.addEventListener('click', () => {
            addMarkAndChangeTurn(square8);
        })
        square9.addEventListener('click', () => {
            addMarkAndChangeTurn(square9);
        })
       // let popupScreen = document.querySelector('#popupScreen');
        
        let replayBtn = document.querySelector('#replayBtn');
        replayBtn.addEventListener('click', reset);

        let playerPopupScreen = document.querySelector('#playerPopupScreen')
        let humanBtn = document.querySelector('#humanBtn');
        humanBtn.addEventListener('click', () => {
            playerPopupScreen.style.display = 'block';
        })




        let player1NameInput = document.querySelector('#player1NameInput')
        let player2NameInput = document.querySelector('#player2NameInput')
        let submitPlayerBtn = document.querySelector('#submitPlayerBtn')
        submitPlayerBtn.addEventListener('click', () => {
            player1 = player(player1NameInput.value);
            player2 = player(player2NameInput.value);
            playerPopupScreen.style.display = 'none';
            entryScreen.style.display = 'none';
            player1NameInput.value = '';
            player2NameInput.value = '';
            //Need to put this in the event listener because otherwise a playername doesn't exist for original turn message//
            turnMessage.innerText = turnMessage.innerText = player1.playerName() + ' Turn';


        })
        let closeBtn = document.querySelector('#closeBtn');
        closeBtn.addEventListener('click', () => {
            player1NameInput.value = '';
            player2NameInput.value = '';
            playerPopupScreen.style.display = 'none'
        })
        let defaultsBtn = document.querySelector('#defaultsBtn');
        defaultsBtn.addEventListener('click', () => {
            player1NameInput.value = 'Daniel';
            player2NameInput.value = 'Rocky';
        })



        let mainMenu = document.querySelector('#mainMenu');
        mainMenu.addEventListener('click', () => {
            reset();
            entryScreen.style.display = 'block'
        })



    }
    
    
    let turn = true;
    //let playerTextContainer = document.querySelector('#playerTextContainer')
    let turnMessageContainer = document.querySelector('#turnMessageContainer')
    let turnMessage = document.createElement('p');
    turnMessageContainer.append(turnMessage);
   
    function addMarkAndChangeTurn(x){
        if (turn == true){
            x.innerText = 'x';
            x.value = 1;
            turn = false;
            turnMessage.innerText = player2.playerName() + ' Turn'
        }
        else if (turn == false) {
            x.innerText = 'o';
            x.value = 2;
            turn = true;
            turnMessage.innerText = player1.playerName() + ' Turn'
        }
        x.disabled = true;
        gameBoard.addToBoard();
        victory();
    }

    
    function victory() {
        let victoryMessage = document.createElement('p')
        victoryMessage.id = 'victoryMessage'
        let popupScreen = document.querySelector('#popupScreen')
        let popupText = document.querySelector('#popupText')
        let popupText2 = document.querySelector('#popupText2')


        function player1Victory(){
            popupScreen.style.display ='block'
            popupText.innerText = player1.playerName() + ' was hot, drew first and shot';
            popupText2.innerText = 'and ' + player2.playerName() + ' collapsed in the corner.';
            //playerTextContainer.append(victoryMessage)
            //victoryMessage.innerText = player1.playerName() + ' Drew First and Shot and - ' + player2.playerName() + ' Collapsed in the Corner.'
        }

        function player2Victory() {
            popupScreen.style.display = 'block'
            popupText.innerText = player2.playerName() + ' was hot, drew first and shot';
            popupText2.innerText = 'and ' + player1.playerName() + ' collapsed in the corner.';            //playerTextContainer.append(victoryMessage)
            //victoryMessage.innerText = player2.playerName() + ' Drew First and Shot and - ' + player1.playerName() + ' Collapsed in the Corner.'
        }

        function tie() {
            popupScreen.style.display = 'block'
            popupText.innerText = 'CAT'
            popupText2.innerText = 'Doc its only a scratch, Ill be better soon as im able'
        }

        //horizontals//
        if (square1.value == 1 && square2.value == 1 && square3.value == 1) {
            player1Victory()
            
        }
        else if (square1.value == 2 && square2.value == 2 && square3.value == 2) {
            player2Victory()
            
        }
        else if (square4.value == 1 && square5.value == 1 && square6.value == 1) {
            player1Victory()
            
        }
        else if (square4.value == 2 && square5.value == 2 && square6.value == 2) {
            player2Victory()
          
        }
        else if (square7.value == 1 && square8.value == 1 && square9.value == 1) {
            player1Victory()
           
        }
        else if (square7.value == 2 && square8.value == 2 && square9.value == 2) {
            player2Victory()
          
        }

        //verticals//
        else if (square1.value == 1 && square4.value == 1 && square7.value == 1) {
            player1Victory()
            
        }
        else if (square1.value == 2 && square4.value == 2 && square7.value == 2) {
            player2Victory()
         
        }
        else if (square2.value == 1 && square5.value == 1 && square8.value == 1) {
            player1Victory()
            
        }
        else if (square2.value == 2 && square5.value == 2 && square8.value == 2) {
            player2Victory()
          
        }
        else if (square3.value == 1 && square6.value == 1 && square9.value == 1) {
            player1Victory()
            
        }
        else if (square3.value == 2 && square6.value == 2 && square9.value == 2) {
            player2Victory()
           
        }
        //diagonals//
        else if (square1.value == 1 && square5.value == 1 && square9.value == 1) {
            player1Victory()
            
        }
        else if (square1.value == 2 && square5.value == 2 && square9.value == 2) {
            player2Victory()
            
        }
        else if (square3.value == 1 && square5.value == 1 && square7.value == 1) {
            player1Victory()
          
        }
        else if (square3.value == 2 && square5.value == 2 && square7.value == 2) {
            player2Victory()
           
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
            tie()
               
        }
    }

    function reset() {
        turn = true;
        turnMessage.innerText = player1.playerName() + ' Turn';
        popupScreen.style.display = 'none';

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

        let playerText = document.querySelector("#playerText");
        //playerText.innerText = 'Danny Boy, this is a Showdown'

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



