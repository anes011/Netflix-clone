import '../styles/searchresults.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import movieData from '../Context';
import imageNotFound from '../images & logos/Qo5mfYDE5v-350.png';

function SearchResults() {

    const { input, setTarget, setInfoTarget } = useContext(movieData);

    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmIyY2NmMjI4NDQ0ODhjODZiZWNhZDcwMWUxYjA3MyIsInN1YiI6IjY1MjU2ZTljZDM5OWU2MDBlMzYzOTMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GosODVNNRnpI0fhbwnCyql3eDr46YYI1_1KX6KtEuYg'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${input}`, options)
            .then((response) => response.json())
            .then((response) => {
                setApiData(response.results);
            });
    }, [input]);

    const handleMatch = (id) => {
        const searchTarget = apiData.find((x) => x.id === id);
        setTarget(searchTarget);
    };

    const handleHover = (id) => {
        const hoverTarget = apiData.find((x) => x.id === id);
        setInfoTarget(hoverTarget);
    };

    return(
        <div className="search-results">
            {
                apiData.map((s) => {
                    if (input !== null) {
                        if (s.backdrop_path === null) {
                            return(
                                <Link to='/moviepage'>
                                    <img onMouseOver={() => handleHover(s.id)} onClick={() => handleMatch(s.id)} src={imageNotFound} alt={s.title} className="movie-result" />
                                </Link>
                            )
                        }else {
                            return(
                                <Link to='/moviepage'>
                                    <img onMouseOver={() => handleHover(s.id)} onClick={() => handleMatch(s.id)} src={`https://image.tmdb.org/t/p/w500/${s.backdrop_path}`} alt={s.title} className="movie-result" />
                                </Link>
                            )
                        }
                    };
                })
            }
        </div>
    )
}

export default SearchResults;