import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './contexts/index'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos(prevTodo=>[{id: Date.now(),...todo},...prevTodo])
  }

  const updateTodo = (id,todo)=>{
    setTodos(prev=>prev.map((prevTodo)=>(prevTodo.id === id)?todo:prevTodo));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=>todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>prev.map((todo)=>todo.id===id ?{...todo,completed: !todo.completed} :todo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen flex flex-col items-center overflow-x-hidden justify-between">

      <div className="Header bg-slate-950 w-screen h-20 flex justify-center items-center">
        <p className='text-slate-50 text-3xl'>Todo List</p>
      </div>
                <div className="w-full max-w-2xl mt-5 mb-5 shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>
                        </div>
                       ))}
                    </div>
                </div>
                <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
      <p className='text-slate-50'> Code with ❤️ by <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</a></p>
        <p><a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a></p>
      </div>
      </div>
    </TodoProvider>
  )
}

export default App
