import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [btn, setBtn] = useState(false);
  const [todods, setTodos] = useState([
    {
      title : "Helloooo Drashti jii",
      desc : "I want to confess something"
    },
    {
      title : "Helloo Ayush Jiii",
      desc : "Yes please..."
    }, 
    {
      title : "Yess Drashti jii",
      desc : "But i can't have guts to confess it"
    }
  ]);

  const Todo = ({todo}) => {
    return <>
    <div className='todo1'>
      <div className="todo">{todo.title}</div>
      <div className="todo">{todo.desc}</div>
    </div>
    </>
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {btn ? <button>Button is true</button> : <button>Button is false</button>} */}
      {btn && <button>Button is true</button>}
      <div className="card">
        <button onClick={() => {
          setBtn(!btn);
        } }>
          count is {count}
        </button>
        {todods.map((todo,idx) => {
          return <Todo todo={todo} key={idx} />
        })}
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
