import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreatePost from './CreatePost';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  
  return (
      <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Crear Post</Link>
        <Link to="/login" >Login</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
  );
}

export default App;
