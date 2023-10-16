import { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import movieData from '../Context';
import '../styles/trending.css';

function TrendingSlider() {

    const { setTarTrending } = useContext(movieData);

    const movieBtnTrending = document.querySelectorAll('.movie-btn-trending');

    let transformTrending = 0;

    const previousBtnTrending = useRef(null);
    const nextBtnTrending = useRef(null);

    const [apiDataTrending, setApiDataTrending] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmIyY2NmMjI4NDQ0ODhjODZiZWNhZDcwMWUxYjA3MyIsInN1YiI6IjY1MjU2ZTljZDM5OWU2MDBlMzYzOTMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GosODVNNRnpI0fhbwnCyql3eDr46YYI1_1KX6KtEuYg'
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/all/day', options)
            .then(response => response.json())
            .then((response) => {
                setApiDataTrending(response.results);
            })
    }, [])

    const handleNextTrending = (event) => {
        event.stopPropagation();
        if (transformTrending > -1300) {
            transformTrending += -100;
        }else {
            transformTrending += -100;
            nextBtnTrending.current.style.display = 'none';
        }
        previousBtnTrending.current.style.display = 'block';
        movieBtnTrending.forEach((b) => {
            b.style.transform = `translateX(${transformTrending}%)`;
        })
    };

    const handlePreviousTrending = (event) => {
        event.stopPropagation();
        if (transformTrending < -100) {
            transformTrending += 100;
        }else {
            transformTrending += 100;
            previousBtnTrending.current.style.display = 'none';
        }
        nextBtnTrending.current.style.display = 'block';
        movieBtnTrending.forEach((b) => {
            b.style.transform = `translateX(${transformTrending}%)`;
        })
    };

    const handleTargetTrending = (id) => {
        const targetTrending = apiDataTrending.find((t) => t.id === id);
        setTarTrending(targetTrending);
    };

    return(
        <div className="trending-slider">
            <p className='trending'>Trending</p>
            <div className="slider-upcoming">
                <button ref={previousBtnTrending} className="prev-btn" onClick={handlePreviousTrending}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>
                <button ref={nextBtnTrending} className="next-btn" onClick={handleNextTrending}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>

                {
                    apiDataTrending.map((t) => (
                        <Link to='/moviepage'>
                            <button onClick={() => handleTargetTrending(t.id)} className="movie-btn-trending">
                                <img src={`https://image.tmdb.org/t/p/w185${t.backdrop_path}`} alt={t.title} />
                            </button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingSlider;