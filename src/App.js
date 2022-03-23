import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import CreatePost from './CreatePost';
import { auth } from './firebase-config';

function App() {
  

  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }
  
  return (
      <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? <Link to="/login" >Login</Link> : (
        <>
          <Link to="/createpost">Crear Post</Link>
          <button onClick={signUserOut}>Desconectarse</button>
        </>
        )}
      </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost isAuth={isAuth} />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
  );
}

export default App;
