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
export default function TicTacToe() {
    const [value, setValue] = useState(Array(9).fill(null));

    function handleClick() {
        alert('click');
    }

    function displaySquare(i) {
        return <Square value={value[i]} onSquareClick={handleClick} />;
    }
    return (
        <div className="tictactoe">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <div className="board-row">
                    <Square value={value[0]} />
                    <Square value={value[1]} />
                    <Square value={value[2]} />
                </div>
                <div className="board-row">
                    <Square value={value[3]} />
                    <Square value={value[4]} />
                    <Square value={value[5]} />
                </div>
                <div className="board-row">
                    <Square value={value[6]} />
                    <Square value={value[7]} />
                    <Square value={value[8]} />
                </div>
            </div>
        </div>
    );
}