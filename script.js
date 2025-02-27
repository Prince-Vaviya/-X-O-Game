var turn = 'X';
const board = ['', ' ', '', ' ', '.', ' ', '', ' ', ''];
var i = 0;
const declared = ["notDeclared"]

const divs = document.querySelectorAll(".box");


divs.forEach(div => {

    function handleClickEvent() {
        var divId = this.id;
        handleClick(turn, divId, div);
        div.removeEventListener('click', handleClickEvent);
    }

    div.addEventListener('click', handleClickEvent);
});


function handleClick(turn, id, div){
    if(declared[0] != "Winner"){
    id = Number(id);
    board[id] = turn;
    div.textContent = turn;
    console.log(i);
    i++

    if(i>=4){
        winner2();
        console.log(board);
    }

    if(i <= 8){
        changeTurn();
    }

}
}

function changeTurn(){


    if(turn == 'O'){
        turn = 'X';
    }
    else{
        turn = 'O';
    }

    if(declared[0] != "Winner"){
        document.getElementById("turn").textContent = `${turn}'s turn`;
    }

    if(declared[0] != "Winner" && i == 8){
        document.getElementById("turn").textContent = "It's a Tie";
    }

}

function winner2(){
    if(board[0] == board[1] && board[0] == board[2]){
        winner(board[0]);
    }
    else if(board[3] == board[4] && board[3] == board[5]){
        winner(board[3]);
    }
    else if(board[6] == board[7] && board[6] == board[8]){
        winner(board[6]);
    }
    else if(board[0] == board[4] && board[0] == board[8]){
        winner(board[0]);
    }
    else if(board[2] == board[14] && board[2] == board[6]){
        winner(board[2]);
    }
    else if(board[0] == board[3] && board[0] == board[6]){
        winner(board[0]);
    }
    else if(board[1] == board[4] && board[1] == board[7]){
        winner(board[1]);
    }
    else if(board[2] == board[5] && board[2] == board[8]){
        winner(board[2]);
    }

}

function winner(who){
    document.getElementById("winner").textContent = `${who} is the Winner!!!`;
    declared[0] = "Winner";
    document.getElementById("turn").textContent = "";
}