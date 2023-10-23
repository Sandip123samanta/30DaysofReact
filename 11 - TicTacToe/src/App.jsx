import { useState } from "react";
import Board from "./components/Board";
import './App.css'


export default function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move} className="bg-white h-10 flex items-center justify-center text-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-xl font-medium">
        <button 
          className="w-full h-full"
        onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="w-screen h-screen bg-slate-900 flex flex-col justify-between items-center">
      <div className="header bg-slate-950 w-screen h-20 flex justify-center items-center">
          <p className='text-slate-50 text-3xl'>Tic Tac Toe</p>
        </div>
      <div className="game p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-between items-center">
        <div className="game-board w-2/5 h-full flex flex-col gap-3 items-center justify-center">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info w-2/5 h-full">
          
            <ol className="flex flex-col gap-2">
              {moves}
            </ol>
        </div>
      </div>
      <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
          <p className='text-slate-50'> Code with ❤️ by 
            <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'> Sandip Samanta</a>
          </p>
          <p>
            <a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a>
          </p>
      </div>
    </div>
  );
}
