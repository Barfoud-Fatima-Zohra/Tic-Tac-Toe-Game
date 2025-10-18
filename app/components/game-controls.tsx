"use client"

interface GameControlsProps {
  onReset: () => void
}

export default function GameControls({ onReset }: GameControlsProps) {
  return (
    <div className="controls-container">
      <button className="btn btn-primary" onClick={onReset}>
        <span className="btn-text">New Game</span>
      </button>
    </div>
  )
}
