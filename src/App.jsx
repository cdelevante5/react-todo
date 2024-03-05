import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todolist= [{id:1, title:"Complete Assignment"}, {id:2, title:"Clean Bedroom"}, {id:3, title:"Fold Laundry"}]




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1> 
      <ul>
      {todolist.map(item => {
        console.log(item)
        console.log(item.title)
        return( 
          <li key = {item.id}> 

          {item.title}
          </li>
          
        )
      })}
      
      </ul>
    </>
  )
}

export default App
