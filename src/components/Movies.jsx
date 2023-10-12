import '../styles/movies.css';
import { useEffect, useRef, useState } from 'react';

function Movies() {

    const movieBtn = document.querySelectorAll('.movie-btn');
    const movieBtnUpcoming = document.querySelectorAll('.movie-btn-upcoming');
    const movieBtnTrending = document.querySelectorAll('.movie-btn-trending');
    const indContainer = document.querySelector('.indicator-container');
    const ind = document.querySelectorAll('.ind');

    let transform = 0;
    let transformUpcoming = 0;
    let transformTrending = 0;
    let indicator = 0;

    const displayImage = useRef(null);
    const movieTitle = useRef(null);
    const movieDescription = useRef(null);
    const nextBtn = useRef(null);
    const previousBtn = useRef(null);
    const previousBtnUpcoming = useRef(null);
    const nextBtnUpcoming = useRef(null);
    const previousBtnTrending = useRef(null);
    const nextBtnTrending = useRef(null);
    const slider = useRef(null);

    const [apiData, setApiData] = useState([]);
    const [apiDataUpcoming, setApiDataUpcoming] = useState([]);
    const [apiDataTrending, setApiDataTrending] = useState([]);

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

    const handleMatch = (id) => {
            const target = apiData.find((t) => t.id === id);
            displayImage.current.style.opacity = '0';
            setTimeout(() => {
                displayImage.current.style.background = `url('https://image.tmdb.org/t/p/w185${target.backdrop_path}') no-repeat`;
                displayImage.current.style.backgroundSize = '100%';
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
            slider.current.style.overflow = 'visible';
    }

    const indicatorRight = () => {
        indicator++;
        ind.forEach((i) => {
            i.style.backgroundColor = 'gray';
        })
        indContainer.childNodes[indicator].style.backgroundColor = '#fff';
    }

    const indicatorLeft = () => {
        indicator--;
        ind.forEach((i) => {
            i.style.backgroundColor = 'gray';
        })
        indContainer.childNodes[indicator].style.backgroundColor = '#fff';
    }

    const handleNext = (event) => {
        event.stopPropagation();
        if (transform > -1300) {
            transform += -100;
        }else {
            transform += -100;
            nextBtn.current.style.display = 'none';
        }
        previousBtn.current.style.display = 'block';
        movieBtn.forEach((btn) => {
            btn.style.transform = `translateX(${transform}%)`;
        })
        indicatorRight();
    }

    const handlePrevious = (event) => {
        event.stopPropagation();
        if (transform < -100) {
            transform += 100;
        }else {
            transform += 100;
            previousBtn.current.style.display = 'none';
        }
        nextBtn.current.style.display = 'block';
        movieBtn.forEach((btn) => {
            btn.style.transform = `translateX(${transform}%)`;
        })
        indicatorLeft();
    }

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

    return(
        <div className="movies">
            <div ref={displayImage} className="display">
                <div className="container">
                    <div ref={movieTitle} className="movie-title">MONEY HEIST</div>
                    <div className="buttons-container">
                        <button className="play-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>
                            <p>Play</p>
                        </button>
                        <button className="mylist-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                            <p>My List</p>
                        </button>
                    </div>
                    <div ref={movieDescription} className="description-container">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fugiat dolorum recusandae temporibus voluptate corporis, totam aliquam consequatur. Ducimus autem nesciunt cum officia libero architecto modi mollitia, fugiat at laudantium.</div>
                </div>
                <div className="type-indicator-container">
                    <p>Popular</p>
                    <div className="indicator-container">
                        <div className="ind" style={{backgroundColor: '#fff'}}></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                        <div className="ind"></div>
                    </div>
                </div>
            </div>
            <div ref={slider} className="slider">
                <button ref={previousBtn} className="prev-btn" onClick={handlePrevious}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>
                <button ref={nextBtn} className="next-btn" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>

                {
                    apiData.map((x) => (
                        <button onClick={() => handleMatch(x.id)} className="movie-btn">
                            <img src={`https://image.tmdb.org/t/p/w185${x.backdrop_path}`} alt={x.name} />
                        </button>
                    ))
                }
            </div>

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
                        <button className="movie-btn-upcoming">
                            <img src={`https://image.tmdb.org/t/p/w185${u.backdrop_path}`} alt={u.title} />
                        </button>
                    ))
                }
            </div>

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
                        <button className="movie-btn-trending">
                            <img src={`https://image.tmdb.org/t/p/w185${t.backdrop_path}`} alt={t.title} />
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Movies;