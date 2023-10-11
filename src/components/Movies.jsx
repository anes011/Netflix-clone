import '../styles/movies.css';
import movie from '../images & logos/wallpapersden.com_house-of-the-dragon-cool-season-1-poster-hd_3840x2160.jpg';
import { useEffect, useState } from 'react';

function Movies() {

    const [apiData, setApiData] = useState([]);

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
                console.log(response);
                setApiData(response.results);
            })
    }, [])

    const handleMatch = (id) => {
        const target = apiData.find((t) => t.id === id);
        console.log(target);
    }

    return(
        <div className="movies">
            <div className="display">
                <div className="movie-title">MONEY HEIST</div>
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
                <div className="description-container">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fugiat dolorum recusandae temporibus voluptate corporis, totam aliquam consequatur. Ducimus autem nesciunt cum officia libero architecto modi mollitia, fugiat at laudantium.</div>
            </div>
            <div className="slider">
                <button className="prev-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>
                <button className="next-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" fill='#fff'></path></svg>
                </button>

                {
                    apiData.map((x) => (
                        <img onClick={() => handleMatch(x.id)} className='movie' src={`https://image.tmdb.org/t/p/w185${x.backdrop_path}`} alt={x.name} />
                    ))
                }
            </div>
        </div>
    )
}

export default Movies;