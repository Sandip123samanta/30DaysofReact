import React from 'react'

function Square({ value, onSquareClick }) {
  return (
    <div className='relative w-1/4 aspect-square inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'>
      
    <button className="square relative w-full h-full text-3xl font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={onSquareClick}>
      {value}
    </button>
    </div>
  )
}

export default Square