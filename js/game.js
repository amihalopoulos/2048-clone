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
      var cell = new Cell(this.string[i], 0, i)
      row1.push(cell)
    } else if (i < 8) {
      var cell = new Cell(this.string[i], 1, i % 4)
      row2.push(cell)
    } else if (i < 12) {
      var cell = new Cell(this.string[i], 2, i % 4)
      row3.push(cell)
    } else {
      var cell = new Cell(this.string[i], 3, i % 4)
      row4.push(cell)
    }
  };
  return this.board
}

Game.prototype.toString = function() {
  for (var i = 0; i < this.board.length; i++) {
    var row = []
    for (var x = 0; x < 4; x++) {
      row.push(this.board[i][x].num)
    };
    console.log(row.join())
  };
}

Game.prototype.move = function(dir) {
  for (var i = 0; i < this.board.length; i++) {

  };

}

var game = new Game()
console.log(game.toString())