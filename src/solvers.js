/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  //Make a board
  //place pieces on the board
    //increment col index and row index where the pieces where go
  //Call any rows conflict function
  //call any col conflict function

  var solution = undefined; 
  var board = new Board({n: n});
  var rows = board.rows();
  var results = {};
  var i = 0;
  while(i < n){
    var hasPlacedPiece = false;
    for(var j = 0; j < rows.length; j++){
      var row = rows[j];
      for(var k = 0; k < row.length; k++){
        if(!row[k]){
          board.togglePiece(j,k);
          if(board.hasAnyRooksConflicts()){
            board.togglePiece(j,k);
          } else {
            hasPlacedPiece = true;
            if(i === n -1){
              solution = board.rows();
            }
            break;
          }
        }
      }
      if(hasPlacedPiece){
        i++;
        break;
      }
    }
  };

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({n: n});
  var rows = board.rows();
  var result = {};

  function copyBoard(board){
    var matrix = [];
    var rows = board.rows();
    for(var i = 0; i < rows.length; i++){
      var row = rows[i];
      matrix.push([]);
      for(var k = 0; k < rows.length; k++){
        matrix[i].push(row[k]);
      }
    }
    var newBoard = new Board(matrix);
    return newBoard;
  };

 
  //this function takes an entire board,
    // and pieces in valide positions
  //add the next piece FOR LOOP
    // we will pass board in with new piece located 1,1
      //passed it in again
  // will add new pieces 
  //base case are number of the pieces on the board equal to n
    //this is when we know we placed as many as we can
  //when called recursively search()
  //search(board, 0);
  function placeNextPiece(board, piecesOnBoard){
    if(piecesOnBoard === n){
      var rowResult = JSON.stringify(board.rows());
      if(result[rowResult] !== 1) {
        result[rowResult] = 1;
        solutionCount ++;
      }
    } else{
      var rows = board.rows();
      for(var i = 0; i < rows.length; i++){
        var row = rows[i];
        for(var k = 0; k < rows.length; k++){
          if(!row[k]){
            board.togglePiece(i, k);
             if (board.hasAnyRooksConflicts()) {
                board.togglePiece(i, k);
            } else {
              var newBoard = copyBoard(board);
              board.togglePiece(i, k); 
              var pieces = piecesOnBoard + 1;
              placeNextPiece(newBoard, pieces); 
            }
          }
        }
      } 
    }
  }
  placeNextPiece(board, 0);
  // while (i < n) {
  //   for (var j = 0; j < rows.length; j++) {
  //     var row = rows[i];
  //     for (var k = 0; i < row.length; k++) {
  //       if (!row[k]) {
  //         board.togglePiece(j, k);
  //         if (board.hasanyRooksConflicts()) {
  //           board.togglePiece(j, k);
  //         } else {

  //         }
  //       }
  //     }
  //   }

// var rowResult = stingify.json(board.rows())
// result[rowResult] = 1;
// 
// if(result[rowResult] !== 1){
//     i++;
//     solution++;
// }


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
