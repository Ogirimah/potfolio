import { useState } from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button className="square"
        onClick={onSquareClick}
        style={ {width: '20px', height: '20px'} }
        >
            {value}
        </button>
    );
}
function TicTacToe({ xIsNext, squares, onPlay }) {

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status =  "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? 'X' : 'O');
    }

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    return (
        <div className="tictactoe">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
                </div>
        </div>
    );
}

function calculateWinner(squares) {
        const lines = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // forward-slash
        [2, 4, 6]  // backslash
        ];
        for (let i = 0; i < lines.length; i++) {
            const [x, y, z] = lines[i];
            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x];
            }
        }
        return null;
    }

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const xIsNext = stepNumber % 2 === 0;
    const currentSquares = history[stepNumber];

    function handlePlay(nextSquares) {
        const newHistory = [...history.slice(0, stepNumber + 1), nextSquares];
        setHistory(newHistory);
        setStepNumber(newHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setStepNumber(nextMove);

    }

    const moves = history.map((squares, move) => {
        let description = move > 0 ? 'Go to move #' + move : 'Go to game start';

    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );
    });

    return (
        <div className="game">
            <div className="game-board">
                <TicTacToe xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}