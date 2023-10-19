import React from 'react'

function InputBox({result,text}) {
  return (
    <>
        <div className="input w-full h-1/5 bg-slate-950 overflow-auto text-white  p-2 flex flex-col justify-around items-end">
        <div className='break-words text-2xl'>
            {result}
        </div>

        <div className='break-words text-xl'>
            {text}
        </div>
        </div>
    </>
  )
}

export default InputBox