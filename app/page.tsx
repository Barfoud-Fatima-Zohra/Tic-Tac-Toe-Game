"use client"

import { useState } from "react"
import AlgorithmInfo from "./components/algorithm-info"
import GameBoard from "./components/game-board"
import GameControls from "./components/game-controls"
import GameStatus from "./components/game-status"
import { GameLogic } from "./lib/game-logic"

export default function Home() {
  const [board, setBoard] = useState<string[]>(["", "", "", "", "", "", "", "", ""])
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState<string | null>(null)
  const [winPattern, setWinPattern] = useState<number[] | null>(null)
  const [isAIThinking, setIsAIThinking] = useState(false)

  const gameLogic = new GameLogic();

  const handleCellClick = (index: number) => {
    if (board[index] !== "" || gameOver || isAIThinking) return

    const newBoard = [...board]
    newBoard[index] = "X"
    setBoard(newBoard)

    const humanWin = gameLogic.checkWin(newBoard, "X")
    if (humanWin) {
      setGameOver(true)
      setWinner("Human")
      setWinPattern(humanWin)
      return
    }

    if (gameLogic.isBoardFull(newBoard)) {
      setGameOver(true)
      setWinner("Draw")
      return
    }

    setIsAIThinking(true)
    setTimeout(() => {
      const bestMove = gameLogic.getBestMove(newBoard)
      const aiBoard = [...newBoard]
      aiBoard[bestMove] = "O"
      setBoard(aiBoard)

      const aiWin = gameLogic.checkWin(aiBoard, "O")
      if (aiWin) {
        setGameOver(true)
        setWinner("AI")
        setWinPattern(aiWin)
      } else if (gameLogic.isBoardFull(aiBoard)) {
        setGameOver(true)
        setWinner("Draw")
      }
      setIsAIThinking(false)
    }, 600)
  }

  const handleReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setGameOver(false)
    setWinner(null)
    setWinPattern(null)
    setIsAIThinking(false)
  }

  return (
    <main className="main-container">
      <div className="page-wrapper">
        {/* Game Section */}
        <section className="game-section">
          <div className="game-wrapper">
            <header className="game-header">
              <h1 className="game-title">Tic Tac Toe</h1>
              <p className="game-subtitle">Challenge the AI with Minimax Algorithm</p>
            </header>

            <GameStatus winner={winner} isAIThinking={isAIThinking} gameOver={gameOver} />

            <GameBoard
              board={board}
              onCellClick={handleCellClick}
              winPattern={winPattern}
              disabled={gameOver || isAIThinking}
            />

            <GameControls onReset={handleReset} />
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <AlgorithmInfo />
        </section>
      </div>
    </main>
  )
}
