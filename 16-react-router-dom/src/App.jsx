import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import User from './components/USer';
import "./app.css";

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <><Navbar /><Home/></>
    },
    {
      path : "/contact",
      element : <><Navbar /><Contact /></>
    },
    {
      path : "/about",
      element : <><Navbar /><About /></>
    },
    {
      path : "/login",
      element: <><Navbar/><Login /></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/><User /></>
    }
  ]);
  return (
    <div>
      {/* <div>Hello Guys..! Welcome to our page.</div> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
