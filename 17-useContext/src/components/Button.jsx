import {useContext} from 'react'
import Component1 from './Component1';
import { counterContext } from '../Context/context';

const Button = () => {
    const {setCount} = useContext(counterContext);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}><span><Component1 /></span>I am Button</button>
    </div>
  )
}

export default Button
