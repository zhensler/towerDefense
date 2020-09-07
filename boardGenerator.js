var board = [];
for(let i=0;i < 16;i++){
    board.push([]);
    for(let j=0;j < 16;j++){
        if(j != 2){
            board[i].push('empty');
        }
        else{
            board[i].push('path');
        }
    }
}
console.log(board);