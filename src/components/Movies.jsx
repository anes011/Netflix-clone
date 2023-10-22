import '../styles/movies.css';
import { useEffect, useRef, useState, useContext } from 'react';
import movieData from '../Context';
import { Link } from 'react-router-dom';

function Movies() {

    let { setTarget } = useContext(movieData);

    const movieBtn = document.querySelectorAll('.movie-btn');
    const indContainer = document.querySelector('.indicator-container');
    const slider = document.querySelector('.slider');

    const displayImage = useRef(null);
    const movieTitle = useRef(null);
    const movieDescription = useRef(null);
    const nextBtn = useRef(null);
    const previousBtn = useRef(null);

    const [apiData, setApiData] = useState([]);
    const [transform, setTransform] = useState(0);
    const [indicator, setIndicator] = useState(0);
    const [movieWidth, setMovieWidth] = useState(null);
    const [movieAmount, setMovieAmount] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmIyY2NmMjI4NDQ0ODhjODZiZWNhZDcwMWUxYjA3MyIsInN1YiI6IjY1MjU2ZTljZDM5OWU2MDBlMzYzOTMzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GosODVNNRnpI0fhbwnCyql3eDr46YYI1_1KX6KtEuYg'
            }
          };
          
          fetch('https://api.themoviedb.org/3/tv/popular', options)
            .then(response => response.json())
            .then((response) => {
                setApiData(response.results);
            })
    }, [])

    const handleMatch = (id) => {
        const target = apiData.find((t) => t.id === id);
        displayImage.current.style.opacity = '0';
        setTimeout(() => {
            displayImage.current.style.background = `url('https://image.tmdb.org/t/p/original/${target.backdrop_path}') no-repeat`;
            displayImage.current.style.backgroundSize = '100% 100%';
            displayImage.current.style.backgroundPosition = 'center';
            displayImage.current.style.opacity = '1';
        }, 300);
        movieTitle.current.style.opacity = '0';
        setTimeout(() => {
            movieTitle.current.textContent = `${target.name}`;
            movieTitle.current.style.opacity = '1';
        }, 300);
        movieDescription.current.style.opacity = '0';
        if (target.overview === '') {
            setTimeout(() => {
                movieDescription.current.textContent = `No description...`;
                movieDescription.current.style.opacity = '1';
            }, 300);
        }else {
            setTimeout(() => {
                movieDescription.current.textContent = `${target.overview}`;
                movieDescription.current.style.opacity = '1';
            }, 300);
        }
        setTarget(target);
    }

    useEffect(() => {
        if (slider) {
            setMovieWidth(slider.childNodes[2].offsetWidth);
            setMovieAmount((slider.children.length - 2));
        }
    });

    const handleNext = () => {
        setTransform(transform - (movieWidth));
        setIndicator(indicator + 1);
        previousBtn.current.style.display = 'block';
    }

    const handlePrevious = () => {
        setTransform(transform + (movieWidth));
        setIndicator(indicator - 1);
        nextBtn.current.style.display = 'block';
    }

    movieBtn.forEach((btn) => {
        btn.style.transform = `translateX(${transform}px)`;
    })

    const endPoint = (movieAmount * 300) - 1200;

    useEffect(() => {
        if (transform === 0) {
            previousBtn.current.style.display = 'none';
        }else if (transform === -endPoint) {
            nextBtn.current.style.display = 'none';
        }
    });

    useEffect(() => {
        for (let i = 0; i < (movieAmount - 3); i++) {
            const ind = document.createElement('div');
            ind.classList.add('ind');
            indContainer.append(ind);
        }
    }, [movieAmount]);

    if (indContainer && indContainer.childNodes[indicator]) {
        const ind = document.querySelectorAll('.ind');
        ind.forEach((i) => {
            i.style.backgroundColor = 'rgb(35, 35, 35)';
        })
        indContainer.childNodes[indicator].style.backgroundColor = '#fff';
    };

    return(
        <div className="movies">
            <div ref={displayImage} className="display">
                <div className="container">
                    <div ref={movieTitle} className="movie-title">MONEY HEIST</div>
                    <div className="buttons-container">
                        <Link to='/moviepage' className='play-btn-anchor'>
                            <button className="play-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                                <p>Play</p>
                            </button>
                        </Link>
                        <button className="mylist-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            <p>My List</p>
                        </button>
                    </div>
                    <div ref={movieDescription} className="description-container">With milions of euros and their lives on the line, nine robbers attempt to pull off the greatest heist of all time.</div>
                </div>
                <div className="type-indicator-container">
                    <p>Popular</p>
                    <div className="indicator-container"></div>
                </div>
            </div>
            <div className="slider">
                <button ref={previousBtn} className="prev-btn" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>
                <button ref={nextBtn} className="next-btn" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>

                {
                    apiData.map((x) => (
                        <button onClick={() => handleMatch(x.id)} className="movie-btn">
                            <img src={`https://image.tmdb.org/t/p/w500/${x.backdrop_path}`} alt={x.name} />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies;