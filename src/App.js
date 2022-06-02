
import './App.css';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Messages from "./Pages/Messages";
import Settings from "./Pages/Settings";
import About from "./Pages/About";
import Conversations from "./Pages/Converstions";
import Chats from "./Pages/Chats";


function App() {
    return (
        <Router>
            <nav>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about" >About </Link>
                </div>
                <div>
                    <Link to="/messages" >messages</Link>
                </div>
                <div>
                    <Link to="/settings" >settings</Link>
                </div>





            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/conversations" element={<Conversations />} />
                <Route path="/chats" element={<Chats />} />

                <Route path="/messages" element={<Messages />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<ErrorPage/>} />


            </Routes>
        </Router>

    );
}

export default App;
