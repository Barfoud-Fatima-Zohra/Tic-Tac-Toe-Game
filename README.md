# Tic-Tac-Toe with the Minimax Algorithm

This project is a Tic-Tac-Toe game built with Next.js, TypeScript, and React, featuring the Minimax algorithm so the computer can play optimally. The game is designed for a human player to compete against a computer (the "Robot").

![Main Interface](/assets/tic-tac-toe.png)

## Features

- **User Interface**: A modern, intuitive user interface with a 3x3 game board
- **Turn-based gameplay**: Players alternate turns, with the human as "X" and the computer as "O"
- **Minimax Algorithm**: Used to calculate the best possible move for the computer to minimize its chances of losing and maximize its chances of winning
- **Game End Notification**: A message appears at the end of each game indicating if the human or the robot has won, or if there’s a draw
- **Game Reset**: A "Reset" button lets you restart the game at any time
- **Responsive Interface**: Adaptive design works on both desktop and mobile

## Explanation of the Minimax Algorithm

The Minimax algorithm is a recursive method used in game theory and artificial intelligence to determine the best move to make. Here’s how it works:

### Evaluating Moves

The algorithm considers all possible moves available on the board.

### Maximizing and Minimizing

- If it’s the computer’s turn (maximizing player), it chooses the move that maximizes its score
- If it’s the human’s turn (minimizing player), it chooses the move that minimizes the computer’s score

### Scoring Function

- If the computer wins, the score is positive (e.g., +10)
- If the human wins, the score is negative (e.g., -10)
- If it’s a draw, the score is neutral (0)

### Recursion

The algorithm keeps exploring possible moves recursively until it reaches a game-ending condition (win, loss, or draw).

The goal of the Minimax algorithm is to ensure the computer plays optimally, minimizing losses against a perfect opponent.

## Installation and Running

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd tic-tac-toe_game
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the result.

### Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run start` - Starts the app in production mode
- `npm run lint` - Lints the code with ESLint

## Technologies Used

- **Next.js 14** - React framework for production
- **TypeScript** - Typed programming language
- **React** - UI library
- **Tailwind CSS** - CSS framework for styling
