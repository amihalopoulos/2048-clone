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

Game.prototype.toHtml = function() {
  var string = "<table id='board'>"
  for (var x=0; x<this.board.length; x++){
    string += "<tr class='row'>"
    for (var y=0; y<this.board.length;y++){
      var num = ""
      if (this.board[x][y] != 0) {
        num = this.board[x][y]
      }
      string += "<td class='cell'>" + num + "</td>"
    };
    string += "</tr>"
  };
  string += "</table>"
  return string
}

var spawnBlock = function(board) {
  var nums = [2,4]
  var ranDigit = Math.floor(Math.random()*4)
  var ranDigitTwo = Math.floor(Math.random()*4)
  if (board[ranDigit][ranDigitTwo] == 0) {
    board[ranDigit][ranDigitTwo] = nums[Math.floor(Math.random()*2)]
  } else {
    spawnBlock(board)
  }
}

Game.prototype.move = function(dir) {
  var self = this
  switch(dir) {
    case 'up':
      var noZeroBoard = []
      var transposedBoard = _.zip(self.board[0], self.board[1], self.board[2], self.board[3])
      for (var x = 0; x <= 3; x++) {
        var noZeros = transposedBoard[x].filter(function(x) { return x != 0; });
        for (var z = 0; z <= noZeros.length; z++) {
          if (noZeros[z+1] && noZeros[z] == noZeros[z+1]) {
            noZeros[z+1] *= 2
            noZeros.splice(z, 1)
          }
        }
        while (noZeros.length < 4) {
          noZeros.push(0)
        }
        noZeroBoard.push(noZeros)
      }
      this.board = _.zip(noZeroBoard[0], noZeroBoard[1], noZeroBoard[2], noZeroBoard[3])
      spawnBlock(this.board)
      break;
    case 'down':
      var noZeroBoard = []
      var transposedBoard = _.zip(self.board[0].reverse(), self.board[1].reverse(), self.board[2].reverse(), self.board[3].reverse())
      for (var x = 3; x >= 0; x--) {
        var noZeros = transposedBoard[x].filter(function(x) { return x != 0; });
        for (var z = 0; z <= noZeros.length; z++) {
          if (noZeros[z+1] && noZeros[z] == noZeros[z+1]) {
            noZeros[z+1] *= 2
            noZeros.splice(z, 1)
          }
        }
        while (noZeros.length < 4) {
          noZeros.unshift(0)
        }
        noZeroBoard.push(noZeros)
      }
      this.board = _.zip(noZeroBoard[0], noZeroBoard[1], noZeroBoard[2], noZeroBoard[3])
      spawnBlock(this.board)
      break;
    case 'right':
      var noZeroBoard = []
      for (var x = 0; x <= 3; x++) {
        var noZeros = this.board[x].filter(function(x) { return x != 0; });
        for (var z = 0; z <= noZeros.length; z++) {
          if (noZeros[z+1] && noZeros[z] == noZeros[z+1]) {
            noZeros[z+1] *= 2
            noZeros.splice(z, 1)
          }
        }
        while (noZeros.length < 4) {
          noZeros.unshift(0)
        }
        noZeroBoard.push(noZeros)
      }
      this.board = noZeroBoard
      spawnBlock(this.board)
      break;
    case 'left':
      var noZeroBoard = []
      for (var x = 0; x <= 3; x++) {
        var noZeros = this.board[x].filter(function(x) { return x != 0; });
        for (var z = 0; z <= noZeros.length; z++) {
          if (noZeros[z+1] && noZeros[z] == noZeros[z+1]) {
            noZeros[z+1] *= 2
            noZeros.splice(z, 1)
          }
        }
        while (noZeros.length < 4) {
          noZeros.push(0)
        }
        noZeroBoard.push(noZeros)
      }
      this.board = noZeroBoard
      spawnBlock(this.board)
      break;
  }
}
