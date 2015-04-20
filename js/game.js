function Cell(num, x, y) {
  this.num = num
  this.x = x
  this.y = y
  // this.empty = if (num === 0) {
  //   this.empty = false
  // } else {
  //   this.empty? = true
  // }
}

Cell.prototype.shift = function(dir) {
  if (dir === 'up'){
    this.y ++
  } else if (dir === 'right'){
    this.x ++
  } else if (dir === 'down') {
    this.y --
  } else if (dir === 'left') {
    this.x --
  }
}
function Game(string) {
  this.string = string || '0000202000000000'
  this.cell
  this.row
  this.col
  this.board = this.board()
}

Game.prototype.board = function() {
  var row1 = []
  var row2 = []
  var row3 = []
  var row4 = []
  this.board = [row1, row2, row3, row4]
  for (var i = 0; i <= this.string.length - 1; i++) {
    if (i < 4 ) {
      row1.push(this.string[i])
    } else if (i < 8) {
      row2.push(this.string[i])
    } else if (i < 12) {
      row3.push(this.string[i])
    } else {
      row4.push(this.string[i])
    }
  };
  return this.board
}

Game.prototype.toString = function() {
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[i].join())
  };
}

Game.prototype.move = function(dir) {
  for (var i = 0; i < this.board.length; i++) {

  };

}

var game = new Game()
console.log(game.toString())