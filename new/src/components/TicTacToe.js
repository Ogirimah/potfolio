import { useState } from 'react';

// Functional component representing a single square on the Tic Tac Toe board
function Square({ value, onSquareClick }) {
    return (
        // Button element that renders the square
        <button
            className="square"
            onClick={onSquareClick} // Calls the provided function when the square is clicked
            style={{ width: '20px', height: '20px' }} // Inline styles for basic sizing
        >
            {value} {/* Displays the current value ('X', 'O', or null) of the square */}
        </button>
    );
}

// Functional component representing the Tic Tac Toe board
function TicTacToe({ xIsNext, squares, onPlay }) {
    // Determine the winner based on the current state of the squares
    const winner = calculateWinner(squares);
    let status;

    // Set the status message to display the winner or the next player
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    // Function to handle a click on a square
    function handleClick(i) {
        // If there's a winner or the square is already filled, do nothing
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // Create a copy of the squares array to avoid directly modifying the state
        const nextSquares = squares.slice();
        // Determine which player's turn it is and update the corresponding square
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        // Call the onPlay function (passed from the parent Game component) to update the game state
        onPlay(nextSquares);
    }

    // Render the Tic Tac Toe board
    return (
        <div className="tictactoe">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                {/* Display the current game status */}
                <div className="status">{status}</div>
                {/* First row of the board */}
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                {/* Second row of the board */}
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                {/* Third row of the board */}
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
        </div>
    );
}

// Function to calculate the winner given an array of squares
function calculateWinner(squares) {
    // Array of all possible winning lines (rows, columns, diagonals)
    const lines = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // forward-slash diagonal
        [2, 4, 6]  // backslash diagonal
    ];
    // Iterate through each winning line
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // Check if all three squares in the current line have the same non-null value
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]; // Return the winning player ('X' or 'O')
        }
    }
    return null; // If no winner is found, return null
}

// Functional component representing the main Game logic
export default function Game() {
    // State variable to store the history of the game moves (an array of square arrays)
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // State variable to keep track of the current move number
    const [stepNumber, setStepNumber] = useState(0);
    // Determine if the next move is for 'X' (even step numbers) or 'O' (odd step numbers)
    const xIsNext = stepNumber % 2 === 0;
    // Get the current state of the squares from the history based on the current step number
    const currentSquares = history[stepNumber];

    // Function to handle a player making a move
    function handlePlay(nextSquares) {
        // Create a new history array by slicing up to the current step and adding the new squares
        const newHistory = [...history.slice(0, stepNumber + 1), nextSquares];
        // Update the history state with the new history
        setHistory(newHistory);
        // Update the step number to reflect the latest move
        setStepNumber(newHistory.length - 1);
    }

    // Function to jump to a specific move in the game history (time travel)
    function jumpTo(nextMove) {
        // Update the step number to the selected move
        setStepNumber(nextMove);
    }

    // Create a list of moves for the game history
    const moves = history.map((squares, move) => {
        // Determine the description for each move button
        const description = move > 0 ? `Go to move #${move}` : 'Go to game start';
        return (
            // Render a list item with a button for each move in history
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    // Render the main Game component
    return (
        <div className="game">
            <div className="game-board">
                {/* Render the TicTacToe board component, passing down the necessary props */}
                <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                {/* Display the list of moves for time travel */}
                <ol>{moves}</ol>
            </div>
        </div>
    );
}