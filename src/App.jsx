import './styles/universal.css';
import Main from './pages/Main';
import MoviePage from './pages/MoviePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movieData from './Context';
import { useState } from 'react';

function App() {

  const [gotU, setGotU] = useState(null);

  return (
    <movieData.Provider value={{ gotU, setGotU }}>
      <div className="app">
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/moviepage' element={<MoviePage />} />
          </Routes>
        </Router>
      </div>
    </movieData.Provider>
  );
}

export default App;
