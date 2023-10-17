import { Link } from 'react-router-dom';
import { useEffect, useRef, useState, useContext } from 'react';
import movieData from '../Context';
import '../styles/upcoming.css';

function UpcomingSlider() {

    const { setTarget } = useContext(movieData);

    const movieBtnUpcoming = document.querySelectorAll('.movie-btn-upcoming');

    let transformUpcoming = 0;

    const previousBtnUpcoming = useRef(null);
    const nextBtnUpcoming = useRef(null);

    const [apiDataUpcoming, setApiDataUpcoming] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmIyY2NmMjI4NDQ0ODhjODZiZWNhZDcwMWUxYjA3MyIsInN1YiI6IjY1MjU2ZTljZDM5OWU2MDBlMzYzOTMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GosODVNNRnpI0fhbwnCyql3eDr46YYI1_1KX6KtEuYg'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(response => response.json())
            .then((response) => {
                setApiDataUpcoming(response.results);
            })
    }, [])

    const handleNextUpcoming = (event) => {
        event.stopPropagation();
        if (transformUpcoming > -1300) {
            transformUpcoming += -100;
        }else {
            transformUpcoming += -100;
            nextBtnUpcoming.current.style.display = 'none';
        }
        previousBtnUpcoming.current.style.display = 'block';
        movieBtnUpcoming.forEach((b) => {
            b.style.transform = `translateX(${transformUpcoming}%)`;
        })
    };

    const handlePreviousUpcoming = (event) => {
        event.stopPropagation();
        if (transformUpcoming < -100) {
            transformUpcoming += 100;
        }else {
            transformUpcoming += 100;
            previousBtnUpcoming.current.style.display = 'none';
        }
        nextBtnUpcoming.current.style.display = 'block';
        movieBtnUpcoming.forEach((b) => {
            b.style.transform = `translateX(${transformUpcoming}%)`;
        })
    };

    const handleTargetUpcoming = (id) => {
        const targetUpcoming = apiDataUpcoming.find((u) => u.id === id);
        setTarget(targetUpcoming);
    }
    return(
        <div className="upcoming-slider">
            <p className='upcoming'>Upcoming</p>
            <div className="slider-upcoming">
                <button ref={previousBtnUpcoming} className="prev-btn" onClick={handlePreviousUpcoming}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>
                <button ref={nextBtnUpcoming} className="next-btn" onClick={handleNextUpcoming}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>

                {
                    apiDataUpcoming.map((u) => (
                        <Link to='/moviepage'>
                            <button className="movie-btn-upcoming" onClick={() => handleTargetUpcoming(u.id)}>
                                <img src={`https://image.tmdb.org/t/p/w500${u.backdrop_path}`} alt={u.title} />
                            </button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default UpcomingSlider;