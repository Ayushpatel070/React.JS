import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/count/counterSlice.js'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
        <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        currently Count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
