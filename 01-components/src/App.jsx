import React, { useState } from 'react';
import Card from './components/card.jsx';
import Navbar from './components/navbar.jsx';
import './App.css';

const App = () => {
  let images = ['https://images.unsplash.com/photo-1765547683077-01e617f7af6b?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1765544178860-76d8d263902d?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1765718444557-5f3c36619716?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D']

  function change(e) {
    console.log(e.target.value);
  }

  // const [num, setNum] = useState({user : "Ayush", age : 20});

  // function btnclicked(){
  //   let newNum = {...num};
  //   newNum.user = "Drashti";
  //   newNum.age = 22;
  //   setNum(newNum);
  // }

  const [arr, setArr] = useState([10,20,30]);

  function arrchange() {
    arr.push(99);
    console.log(arr);
  }

  function submit(e) {
    e.preventDefault();
    console.log("Form Submitted By",title);
  }

  // const [num, setNum] = useState(0);

  // function increase() {
  //   setNum(prev => prev + 1);
  //   setNum(prev => prev + 1);
  //   setNum(prev => prev + 1);
  // }

  // function decrease() {
  //   setNum(num-1);
  // }

  // function defaultnum() {
  //   setNum(0);
  // }

  const [title, setTitle] = useState("");

  return (
    <>
    {/* <div className="main1 w-full "> */}
            {/* <Navbar /> */}
    {/* <div className='main overflow-x-auto h-120 w-2/3 bg-amber-50 rounded-2xl px-5 py-5 mx-5 my-5 translate-x-55'>
      <Card user = "Ayush Patel" age = {20} image = {images[1]} />
      <Card user = "Drashti Kukadiya" age = {22} image = {images[1]} />
      <Card user = "Tithi Patel" age = {19} image = {images[2]} />
      <Card user = "Khushi Patel" age = {22} image = {images[2]} />
      <Card user = "Abhi Patel" age = {21} image = {images[0]} />
      <Card user = "Parth Patel" age = {21} image = {images[0]} />

    </div> */}

    {/* </div> */}
      {/* <input type="text" placeholder='Enter Something' onChange={change} /> */}

      {/* <div className="counter">
      <h1>{num}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={defaultnum}>default</button>
      </div> */}

      {/* <div className="counter">
      <h1>Hello My name is {num.user} and age is {num.age} </h1>
      <button onClick={btnclicked}>Click me</button>
      <button onClick={arrchange}>array</button>
      </div> */}

      <div>
        <form action="" onSubmit={submit}>
          <input type="text" placeholder='Enter your name' value={title} onChange={(e) => {
            setTitle(e.target.value);
          }} />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
