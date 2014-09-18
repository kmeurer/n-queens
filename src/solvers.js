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
  board.currentRow = 0;
  var results = [];
  var findSolution = function(currentBoard) {
    // debugger;
    if( (currentBoard.currentRow === n) && !(currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts())) {
      results.push(currentBoard.rows());
      return;
    } else if(currentBoard.currentRow === n) {
      return;
    } else if (currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts()){
      return;
    } else {
      var allBoards = [];
      for(var i = 0; i < n; i++) {
        var rows = _.map(currentBoard.rows(), function(el){
          return el.slice();
        });
        var aBoard = new Board(rows); //instantiate new board
        aBoard.currentRow = currentBoard.currentRow + 1; //increment in preparation for next function iteration
        allBoards.push(aBoard); //push new boards to a storage array
      }
      for(var i = 0; i < n; i++){
        allBoards[i].rows()[currentBoard.currentRow][i] = 1;
      }
      allBoards.forEach(function(el){
        findSolution(el);
      });
    }
  }
  findSolution(board);
  var solution = results[0];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n: n});
  board.currentRow = 0;
  var findSolution = function(currentBoard) {
    // debugger;
    if( (currentBoard.currentRow === n) && !(currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts())) {
      solutionCount++;
      return;
    } else if(currentBoard.currentRow === n) {
      return;
    } else if (currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts()){
      return;
    } else {
      var allBoards = [];
      for(var i = 0; i < n; i++) {
        var rows = _.map(currentBoard.rows(), function(el){
          return el.slice();
        });
        var aBoard = new Board(rows); //instantiate new board
        aBoard.currentRow = currentBoard.currentRow + 1; //increment in preparation for next function iteration
        allBoards.push(aBoard); //push new boards to a storage array
      }
      for(var i = 0; i < n; i++){
        allBoards[i].rows()[currentBoard.currentRow][i] = 1;
      }
      allBoards.forEach(function(el){
        findSolution(el);
      });
    }
  }
  findSolution(board);
  var solution = solutionCount;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  board.currentRow = 0;
  var results = [];

  var findSolution = function(currentBoard) {
    if((currentBoard.currentRow === n) && !(currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts()||
                          currentBoard.hasAnyMajorDiagonalConflicts() || currentBoard.hasAnyMinorDiagonalConflicts())) {
      results.push(currentBoard.rows());
    } else if(currentBoard.currentRow === n) {
      return;
    } else if(currentBoard.hasAnyRowConflicts() || currentBoard.hasAnyColConflicts() ||
              currentBoard.hasAnyMinorDiagonalConflicts() || currentBoard.hasAnyMajorDiagonalConflicts()) {
      return;
    } else {
      var allBoards = [];
      for(var i = 0; i < n; i++) {
        var rows = _.map(currentBoard.rows(), function(el){
          return el.slice();
        });
        var aBoard = new Board(rows);
        aBoard.currentRow = currentBoard.currentRow + 1;
        allBoards.push(aBoard);
      }
      for(var i = 0; i < n; i++) {
        allBoards[i].rows()[currentBoard.currentRow][i] = 1;
      }
      allBoards.forEach(function(el) {
        findSolution(el);
      });
    }
  }
  findSolution(board);
  var solution = results[0]; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
