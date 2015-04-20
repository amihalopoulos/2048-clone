function Game(string) {
  this.string = string || '2024202040042082'
  this.board = this.makeBoard()
}

Game.prototype.makeBoard = function() {
  this.row1 = []
  this.row2 = []
  this.row3 = []
  this.row4 = []
  var nestArray = [this.row1, this.row2, this.row3, this.row4]
  for (var i = 0; i <= this.string.length - 1; i++) {
    if (i < 4 ) {
      this.row1.push(this.string[i])
    }  else if (i < 8) {
      this.row2.push(this.string[i])
    } else if (i < 12) {
      this.row3.push(this.string[i])
    } else {
      this.row4.push(this.string[i])
    }
  };
  return nestArray
}

Game.prototype.toString = function() {
  for (var i = 0; i < this.board.length; i++) {
    console.log(this.board[i].join(' '))
  };
}

Game.prototype.move = function(dir) {
  var self = this
  switch(dir) {
    case 'up':
      for (var x = self.board.length - 1; x >= 0; x--) {
        for (var y = 3; y >= 0; y--) {
          if (x != 0 && self.board[x - 1][y] == 0) {
            self.board[x - 1][y] = self.board[x][y]
            self.board[x][y] = 0
            if (x + 1 < 4 && self.board[x +1][y] != 0){
              self.board[x][y] = self.board[x+1][y]
              self.board[x+1][y] = 0
            }
            if (x + 2 < 4 && self.board[x +2][y] != 0){
              self.board[x][y] = self.board[x+2][y]
              self.board[x+2][y] = 0
            }
            if (x + 3 < 4 && self.board[x +3][y] != 0){
              self.board[x][y] = self.board[x+3][y]
              self.board[x+3][y] = 0
            }
          } else if (x != 0 && self.board[x - 1][y] == self.board[x][y]){
              self.board[x - 1][y] = self.board[x][y] * 2
              self.board[x][y] = 0
            if (x + 1 < 4 && self.board[x +1][y] != 0){
              self.board[x][y] = self.board[x+1][y]
              self.board[x+1][y] = 0
            }
            if (x + 2 < 4 && self.board[x +2][y] != 0){
              self.board[x][y] = self.board[x+2][y]
              self.board[x+2][y] = 0
            }
            if (x + 3 < 4 && self.board[x +3][y] != 0){
              self.board[x][y] = self.board[x+3][y]
              self.board[x+3][y] = 0
            }
          } else if (x + 1 < 4 && self.board[x][y] == 0 && self.board[x + 1][y] != 0) {
            self.board[x][y] = self.board[x + 1][y]
            self.board[x + 1][y] = 0
        }
      }
      }
      break;
    case 'down':
    for (var x = 0; x < self.board.length; x++) {
      for (var y = 0; y < 4; y++) {
       if (x != 3 && self.board[x + 1][y] == 0) {
        self.board[x + 1][y] = self.board[x][y]
        self.board[x][y] = 0
        } else if (x != 3 && self.board[x + 1][y] == self.board[x][y]) {
          self.board[x + 1][y] = self.board[x][y] * 2
          self.board[x][y] = 0
        }
      }
    }
      break;
    case 'right':
      if (y != 3) {

      };
      break;
    case 'left':
      if (y != 0) {

      };
      break;
}
}


game = new Game()
console.log(game.toString())
// game.move('up')
// game.move('up')
// console.log(game.toString())

game.move('up')
console.log(game.toString())


//filter() --ashleys recommendation