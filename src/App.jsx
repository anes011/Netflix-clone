import './styles/universal.css';
import Main from './pages/Main';
import MoviePage from './pages/MoviePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movieData from './Context';
import { useState } from 'react';

function App() {

  const [tarUpcoming, setTarUpcoming] = useState(null);
  const [tarTrending, setTarTrending] = useState(null);

  return (
    <movieData.Provider value={{ tarUpcoming, setTarUpcoming, tarTrending, setTarTrending }}>
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
