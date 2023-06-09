export default function TicTacToe() {
    return (
        <div className="tictactoe">
            <h1>Tic Tac Toe</h1>
            <div className="board">
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
                <div className="row">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                </div>
            </div>
        </div>
    );
}