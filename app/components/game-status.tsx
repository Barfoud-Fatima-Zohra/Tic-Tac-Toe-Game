interface GameStatusProps {
  winner: string | null
  isAIThinking: boolean
  gameOver: boolean
}

export default function GameStatus({ winner, isAIThinking, gameOver }: GameStatusProps) {
  if (isAIThinking) {
    return (
      <div className="status-container">
        <div className="status-message thinking">
          <span className="spinner"></span>
          <span>AI is thinking...</span>
        </div>
      </div>
    )
  }

  if (!gameOver) {
    return (
      <div className="status-container">
        <div className="status-message active">
          <span className="player-indicator">Your Turn</span>
        </div>
      </div>
    )
  }

  if (winner === "Draw") {
    return (
      <div className="status-container">
        <div className="status-message draw">
          <span className="status-icon">🤝</span>
          <span>It's a Draw!</span>
        </div>
      </div>
    )
  }

  if (winner === "Human") {
    return (
      <div className="status-container">
        <div className="status-message success">
          <span className="status-icon">🎉</span>
          <span>You Won!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="status-container">
      <div className="status-message error">
        <span className="status-icon">🤖</span>
        <span>AI Won!</span>
      </div>
    </div>
  )
}
