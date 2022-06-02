
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ErrorPage from "./Pages/ErrorPage";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";


function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about" >About </Link>
                <Link to="/profile" >Profile </Link>
                <Link to="/messages" >messages</Link>
                <Link to="/settings" >settings</Link>

            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:username" element={<Profile/>} />
                <Route path="*" element={<ErrorPage/>} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />


            </Routes>
        </Router>

    );
}

export default App;
