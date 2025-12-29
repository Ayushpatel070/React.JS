import React from 'react'
import { useParams } from 'react-router-dom';

const User = () => {
    let params = useParams();
  return (
    <div>
      <p>Hii. My name is {params.username}</p>
    </div>
  )
}

export default User;
