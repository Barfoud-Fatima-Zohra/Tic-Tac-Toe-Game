export default function AlgorithmInfo() {
  return (
    <div className="algorithm-container">
      <h2 className="info-title">Minimax Algorithm</h2>

      <div className="info-content">
        <div className="info-card">
          <h3 className="info-subtitle">What is Minimax?</h3>
          <p className="info-text">
            The Minimax algorithm is used to make optimal decisions in zero-sum games like Tic-Tac-Toe. It minimizes the
            maximum loss possible for a player (or maximizes the minimum gain).
          </p>
        </div>

        <div className="info-card">
          <h3 className="info-subtitle">How It Works</h3>
          <p className="info-text">There are two types of players in Minimax:</p>
          <ul className="info-list">
            <li>
              <strong>Maximizing Player (AI):</strong> Tries to maximize the score
            </li>
            <li>
              <strong>Minimizing Player (You):</strong> Tries to minimize the score
            </li>
          </ul>
        </div>

        <div className="info-card">
          <h3 className="info-subtitle">Scoring System</h3>
          <p className="info-text">The algorithm uses these scores:</p>
          <ul className="info-list">
            <li>
              <strong>+10:</strong> AI wins
            </li>
            <li>
              <strong>-10:</strong> Human wins
            </li>
            <li>
              <strong>0:</strong> Draw
            </li>
          </ul>
        </div>

        <div className="info-card">
          <h3 className="info-subtitle">Algorithm Steps</h3>
          <ol className="info-list">
            <li>Evaluate all possible moves</li>
            <li>Recursively simulate the game to completion</li>
            <li>Assign scores based on outcomes</li>
            <li>Choose the move with the highest score</li>
          </ol>
        </div>

        <div className="info-card highlight">
          <h3 className="info-subtitle">Key Advantage</h3>
          <p className="info-text">
            The Minimax algorithm guarantees that the AI plays optimally. This means you can never beat the AI - the
            best you can do is draw!
          </p>
        </div>
      </div>
    </div>
  )
}
