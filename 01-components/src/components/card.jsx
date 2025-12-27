import React from 'react'

const card = (props) => {
  return (
    <div className="parent">
    <div className='card shrink-0'>
      <img src= {props.image} alt="" />
      <h2>{props.user}</h2>
      <p>Hello Guys. My name is {props.user}. and the my age is {props.age}</p>
      <button>View Profile</button>
    </div>
    </div>
  )
}

export default card
