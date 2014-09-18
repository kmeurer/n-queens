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

  var board = new Board({n: n});
  var rows = board.rows();
  board.currentRow = 0;
  // if(n === 1){
  //   var rows = board.rows();
  //   rows[0][0] = 1;
  //   console.log("pass that shit");
  //   return rows;
  // }
  for (var i = 0; i < rows.length; i++){
    rows[i][i] = 1;
  }
  solution = rows;

  // var findSolution = function(currentBoard) {




  //   //   console.log("current Row is: " + currentBoard.currentRow);
  //   //   currentBoard.currentRow++;
  //   // // check for conflicts
  //   // // if no conflicts
  //   // if( !board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
  //   //   // if all rows filled
  //   //   if(currentBoard.currentRow - 1 === n ) {
  //   //     // return currentBoard
  //   //     return currentBoard.rows();
  //   //   } else {
  //   //     var rows = currentBoard.rows();
  //   //     for(var i = 0; i < n; i++) {
  //   //       var newBoard = new Board(rows);
  //   //       var newRows = newBoard.rows();
  //   //       newBoard.currentRow = currentBoard.currentRow;
  //   //       console.log(newBoard.currentRow);
  //   //       console.log(newBoard);

  //   //       newRows[newBoard.currentRow - 1][i] = 1;
  //   //       findSolution(newBoard);
  //   //     }
  //   //   }

  //   //   //else
  //   //     // Add rook to currentBoard by iteratively calling findSol
  //   // }
  // }
  // var solution = findSolution(board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var board = new Board({n: n});
  var rows = board.rows();
  var count = 0;
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
