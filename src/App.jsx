import './styles/universal.css';
import Main from './pages/Main';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import movieData from './Context';
import { useState } from 'react';

function App() {

  const [target, setTarget] = useState(null);
  const [input, setInput] = useState(null);
  const [infoTarget, setInfoTarget] = useState(null);

  return (
    <movieData.Provider value={{ target, setTarget, input, setInput, infoTarget, setInfoTarget }}>
      <div className="app">
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/moviepage' element={<MoviePage />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </Router>
      </div>
    </movieData.Provider>
  );
}

export default App;
