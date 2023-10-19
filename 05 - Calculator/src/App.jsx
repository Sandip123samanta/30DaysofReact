import { useState } from 'react'
import InputBox from './components/InputBox'
import Button from './components/Button'
import * as math from "mathjs"
import './App.css'

function App() {
  const [text,setText] = useState("")
  const [result,setResult]=useState("")

  const addToText = (val) =>{
    setText(text=>[...text,val]);
  }
  
  const clearAll = ()=>{
    setText("");
    setResult("")
  }

 const deleteText = () =>{
  setText(prev=>(prev.slice(0,-1)))
 }

 const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input))
 }

  return (
    <>

     
     <div className="container w-screen h-screen bg-gray-900 flex flex-col justify-between items-center">
     <div className="Header bg-slate-950 w-screen h-20 flex justify-center items-center">
        <p className='text-slate-50 text-3xl'>Calculator</p>
      </div>

        <div className="calculator w-1/5 h-3/5 bg-slate-400">
          <InputBox result={result} text={text}/>
          <div className="btnContainer w-full h-4/5 grid grid-rows-5 grid-cols-4">
        <Button className='col-span-2 bg-blue' symbol={'AC'} handleClick={clearAll}/>
        <Button symbol={'DEL'} handleClick={deleteText}/>
        <Button symbol={'/'} handleClick={addToText}/>
        <Button symbol={'1'} handleClick={addToText}/>
        <Button symbol={'2'} handleClick={addToText}/>
        <Button symbol={'3'} handleClick={addToText}/>
        <Button symbol={'*'} handleClick={addToText}/>
        <Button symbol={'4'} handleClick={addToText}/>
        <Button symbol={'5'} handleClick={addToText}/>
        <Button symbol={'6'} handleClick={addToText}/>
        <Button symbol={'+'} handleClick={addToText}/>
        <Button symbol={'7'} handleClick={addToText}/>
        <Button symbol={'8'} handleClick={addToText}/>
        <Button symbol={'9'} handleClick={addToText}/>
        <Button symbol={'-'} handleClick={addToText}/>
        <Button symbol={'.'} handleClick={addToText}/>
        <Button symbol={'0'} handleClick={addToText}/>
        <Button className='col-span-2' symbol={'='} handleClick={calculate}/>
        </div>
        </div>

        <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
        <p className='text-slate-50'> Code with ❤️ by <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</a></p>
        <p><a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a></p>
      </div>
     </div>

     
    </>
  )
}

export default App
