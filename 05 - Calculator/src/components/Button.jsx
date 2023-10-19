import React from 'react'

function Button({symbol,handleClick,className}) {
  return (
    <button
    className={`${className} text-white text-2xl px-4 py-2 font-medium  bg-white border-l border-r border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white`}
    onClick={()=>handleClick(symbol)}
    >
        {symbol}
    </button>
  )
}

export default Button