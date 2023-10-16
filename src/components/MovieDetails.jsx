import '../styles/moviedetails.css';
import Nlogo from '../images & logos/netflix_logo_icon_170919.png';
import { useContext, useEffect, useRef } from 'react';
import movieData from '../Context';

function MovieDetails() {

    const { tarUpcoming, setTarUpcoming, tarTrending, setTarTrending } = useContext(movieData);

    const detailsCont = useRef(null);
    const movieName = useRef(null);
    const date = useRef(null);
    const movieDescription = useRef(null);

    useEffect(() => {
        if (tarUpcoming !== null) {
            detailsCont.current.style.background = `url('https://image.tmdb.org/t/p/w185${tarUpcoming.backdrop_path}') no-repeat`;
            detailsCont.current.style.backgroundSize = '100%';
            detailsCont.current.style.backgroundPosition = 'center';
            movieName.current.textContent = `${tarUpcoming.title}`;
            date.current.textContent = `${tarUpcoming.release_date}`;
            movieDescription.current.textContent = `${tarUpcoming.overview}`;
        }else if (tarTrending !== null) {
            detailsCont.current.style.background = `url('https://image.tmdb.org/t/p/w185${tarTrending.backdrop_path}') no-repeat`;
            detailsCont.current.style.backgroundSize = '100%';
            detailsCont.current.style.backgroundPosition = 'center';
            switch(tarTrending.name) {
                case(undefined):
                    movieName.current.textContent = `${tarTrending.title}`;
                break;
                default:
                    movieName.current.textContent = `${tarTrending.name}`;
                break;
            }
            tarTrending.release_date === undefined ? date.current.textContent = 'Release Date: ???' : date.current.textContent = `${tarTrending.release_date}`;
            movieDescription.current.textContent = `${tarTrending.overview}`;
        }else {
            detailsCont.current.style.background = `url('https://occ-0-2774-2706.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXL0PAHi9-XtMSG8x85X0LHGqOlF4tV7IwnYrI4Xrt0mBekaVkW-s7lAzgobnuOKG8agF05fG9X3HoVvu6CS50ESKi97n1hzLHhh.jpg?r=945') no-repeat`;
            detailsCont.current.style.backgroundSize = '100%';
            detailsCont.current.style.backgroundPosition = 'center';
        }
    })

    return(
        <div ref={detailsCont} className="details-container">
            <div className="gradient">
                <img className='n-logo' src={Nlogo} alt="Netflix N logo" />
                <h3 ref={movieName} className="movie-name">The Silence</h3>
                <div className="movie-info">
                    <p ref={date} className="date">2019</p>
                    <div className="age-rating">16+</div>
                    <p className="duration">1h 30m</p>
                </div>
                <p ref={movieDescription} className="movie-description">With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.</p>
            </div>
        </div>
    )
}

export default MovieDetails;