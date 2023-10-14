import './styles/universal.css';
import Main from './pages/Main';
import MoviePage from './pages/MoviePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/moviepage' element={<MoviePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
