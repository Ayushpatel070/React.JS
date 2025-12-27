import React, { useEffect, useState } from 'react'
import axios from "axios";

const App = () => {

  // localStorage.setItem("userDetail", JSON.stringify({"name" : "Ayush", "age" : 20, "Gender" : "male"}));

  // const user = JSON.parse(localStorage.getItem("userDetail"));
  // console.log(user.name);

  // const [data, SetData] = useState([]);

  // const getdata = async () => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/posts');

  //   let data = await response.json();
  //   console.log(data);

  //   let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //   SetData(response.data);

  // }
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  function aChanging () {
    console.log("A is changing");
  }

  function bChanging () {
    console.log("B is changing");
  }

  useEffect(function () {
    aChanging();
  }, [num]);

  useEffect(function () {
    bChanging();
  }, [num2]);
  
  return (
    // <div>
    //   This is about localstorage so please open your console.
    // </div>
    <>
    {/* <div>
      <button onClick={getdata}>Get data</button>
      {data.map((ele,idx) => {
        return <div> 
          <h3>Hello {ele.title}</h3>
           </div>
      })}
    </div> */}

    <div>
      <h3>{num}</h3>
      <button onClick={() => {
        setNum(num + 1);
      }}>increase</button>
      <h3>{num2}</h3>
      <button onClick={() => {
        setNum2(num2 - 1);
      }}>decrease</button>

    </div>
    </>
  )
}

export default App
