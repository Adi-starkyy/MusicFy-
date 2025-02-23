import './index.css'
import Navbar from './components/Navbar.jsx'
import Home  from './components/Home.jsx'
import Artists from './components/Artists.jsx'
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
    ])
  return (
        <>
         <RouterProvider router={router} />
        </>
  )
}

export default App