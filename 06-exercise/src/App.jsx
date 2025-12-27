import Navbar from './Navbar.jsx'
import { useState, useEffect } from 'react';



const App = () => {
  let [cards, setCards] = useState([]);
  
  const fetchdata = async () => {
    const a = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await a.json();
    setCards(data);
    console.log(data);
  }
  
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <>
      <div className="bg-black text-white">
          <Navbar />
          <div className="cards flex flex-wrap items-start justify-around">
          {cards.map((ele,idx) => {
            return <div key={idx} className="card w-1/4 h-70 rounded m-5 p-3 bg-amber-50 text-black">
            <p className='font-bold'>Id : {ele.id}</p>
            <h3 className='my-2 font-bold text-xl'>Title : {ele.title}</h3>
            <h5 className='font-medium'>Body : {ele.body}</h5>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
