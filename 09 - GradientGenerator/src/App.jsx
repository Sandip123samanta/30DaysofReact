import { useState } from 'react'
import './App.css'
import Gradient from './components/Gradient'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gradient />
    </>
  )
}

export default App
