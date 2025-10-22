import { Bot, Handshake, Loader2, Trophy, User } from "lucide-react"

interface GameStatusProps {
  winner: string | null
  isAIThinking: boolean
  gameOver: boolean
}

export default function GameStatus({ winner, isAIThinking, gameOver }: GameStatusProps) {
  if (isAIThinking) {
    return (
      <div className="status-container">
        <div className="status-message thinking flex items-center gap-2">
          <Loader2 className="animate-spin w-5 h-5 text-blue-500" />
          <span>AI is thinking...</span>
        </div>
      </div>
    )
  }

  if (!gameOver) {
    return (
      <div className="status-container">
        <div className="status-message active flex items-center gap-2">
          <User className="w-5 h-5 text-green-500" />
          <span className="player-indicator">Your Turn</span>
        </div>
      </div>
    )
  }

  if (winner === "Draw") {
    return (
      <div className="status-container">
        <div className="status-message draw flex items-center gap-2">
          <Handshake className="w-5 h-5 text-gray-500" />
          <span>It's a Draw!</span>
        </div>
      </div>
    )
  }

  if (winner === "Human") {
    return (
      <div className="status-container">
        <div className="status-message success flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span>You Won!</span>
        </div>
      </div>
    )
  }

  return (
    <div className="status-container">
      <div className="status-message error flex items-center gap-2">
        <Bot className="w-5 h-5 text-red-500" />
        <span>AI Won!</span>
      </div>
    </div>
  )
}
