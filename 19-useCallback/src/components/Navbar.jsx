import React from 'react'
import { memo } from 'react';

const Navbar = ({addjective, getAddjective}) => {
    console.log("Navbar re-rendered");
  return (
    <div>
      Hello I am {addjective} Navbar.
      <button onClick={getAddjective}>Click me</button>
    </div>
  )
}

export default memo(Navbar);
