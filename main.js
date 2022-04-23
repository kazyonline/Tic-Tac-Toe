const Gameboard = function(){
    const board = [['','',''],['','',''],['','','']] ;
    const player = (mark,name) => {
        
        return {mark,name};
    }
    
    return {board,player};
}


let newGame = Gameboard();
const player1 = newGame.player('x','ade');
const player2 = newGame.player('o','ada');

let state = false;
function checkTurn(player){
 for(var i =0; i<9; ++i){
    
    if (state == false){
        player = player1.mark
        state = true
    }
    else{player = player2.mark
    state = false 
    } 
   
   return player
 }
}

const displayMarker = (event) => {   
   
   event.target.innerHTML = checkTurn();
}

var gridBox = document.getElementsByClassName('grid-box');

for (var i=0; i<gridBox.length; ++i) {
  gridBox[i].addEventListener('click', displayMarker);
}












