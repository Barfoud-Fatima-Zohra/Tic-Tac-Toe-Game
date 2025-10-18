
export class GameLogic {
  private winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ]

  // Check if a player has won
  checkWin(board: string[], player: string): number[] | null {
    for (const pattern of this.winPatterns) {
      if (pattern.every((index) => board[index] === player)) {
        return pattern
      }
    }
    return null
  }

  // Check if board is completely filled 
  isBoardFull(board: string[]): boolean {
    return board.every((cell) => cell !== "")
  }

  //  Get the best move for AI using Minimax algorithm
  getBestMove(board: string[]): number {
    let bestScore = Number.NEGATIVE_INFINITY
    let move = 0

    for (let index = 0; index < board.length; index++) {
      if (board[index] === "") {
        board[index] = "O"
        const score = this.minimax(board, 0, false)
        board[index] = ""

        if (score > bestScore) {
          bestScore = score
          move = index
        }
      }
    }

    return move
  }

  // Minimax algorithm for optimal AI play
  private minimax(board: string[], depth: number, isMaximizing: boolean): number {
    const aiWin = this.checkWin(board, "O")
    const humanWin = this.checkWin(board, "X")
    const isFull = this.isBoardFull(board)

    if (aiWin) return 10 - depth
    if (humanWin) return depth - 10
    if (isFull) return 0

    if (isMaximizing) {
      let bestScore = Number.NEGATIVE_INFINITY
      for (let index = 0; index < board.length; index++) {
        if (board[index] === "") {
          board[index] = "O"
          const score = this.minimax(board, depth + 1, false)
          board[index] = ""
          bestScore = Math.max(score, bestScore)
        }
      }
      return bestScore
    } else {
      let bestScore = Number.POSITIVE_INFINITY
      for (let index = 0; index < board.length; index++) {
        if (board[index] === "") {
          board[index] = "X"
          const score = this.minimax(board, depth + 1, true)
          board[index] = ""
          bestScore = Math.min(score, bestScore)
        }
      }
      return bestScore
    }
  }
}
