import './index.css'
import Navbar from './components/Navbar.jsx'
import Home  from './components/Home.jsx'
import Artists from './components/Artists.jsx'
import LogIn from './components/LogIn.jsx'
import SignUp from './components/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <><Navbar /><Home /></>
        },
        {
            path: "/artists",
            element: <><Navbar /><Artists /></>
        },
        {}, //About Us path and element
        {}, //Contact Us path and element
        {
            path: "/login",
            element: <LogIn />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
    ])
  return (
        <>
         <RouterProvider router={router} />
        </>
  )
}

export default App