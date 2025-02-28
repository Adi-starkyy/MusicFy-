import './index.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Artists from './components/Artists.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import AboutUs from './components/AboutUs.jsx';
import Dashboard from './components/Dashbord.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
    const router = createBrowserRouter([
        { path: "/", element: <><Navbar /><Home /></> },
        { path: "/artists", element: <><Navbar /><Artists /></> },
        { path: "/aboutus", element: <><Navbar /><AboutUs /></> },
        { path: "/dashboard", element: <><Dashboard /></> },
        { path: "/login", element: <><LogIn /></> },
        { path: "/signup", element: <><SignUp /></> },
        { path: "/contact", element: <><Navbar /><div>Contact Page Coming Soon</div></> } // ✅ Contact Page Placeholder
    ]);

    return <RouterProvider router={router} />;
};

export default App;
