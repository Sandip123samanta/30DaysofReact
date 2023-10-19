import React from 'react'

function Button({bgColor}) {

    const handler = () =>{
        window.navigator.clipboard.writeText(bgColor)
    }

  return (
    <div type="button" style={{backgroundColor: bgColor}} class="text-white w-full h-3/5 text-ellipsis flex items-center justify-center">
        
        <button className='block pl-6 pr-6 pt-3 pb-3 bg-white border focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
        onClick={handler}
        >
        {bgColor}

        </button>
        
    </div>
  )
}

export default Button