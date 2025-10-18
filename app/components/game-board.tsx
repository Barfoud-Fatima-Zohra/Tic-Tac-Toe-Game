"use client"

interface GameBoardProps {
  board: string[]
  onCellClick: (index: number) => void
  winPattern: number[] | null
  disabled: boolean
}

export default function GameBoard({ board, onCellClick, winPattern, disabled }: GameBoardProps) {
  const isWinningCell = (index: number) => winPattern?.includes(index) ?? false

  return (
    <div className="board-container">
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell ? `cell-${cell.toLowerCase()}` : ""} ${isWinningCell(index) ? "cell-winning" : ""}`}
            onClick={() => onCellClick(index)}
            disabled={disabled || cell !== ""}
            aria-label={`Cell ${index + 1}${cell ? ` - ${cell}` : ""}`}
          >
            <span className="cell-content">{cell}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
