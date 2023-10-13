import '../styles/moviepage.css';
import Nav from '../components/Nav';
import Nlogo from '../images & logos/netflix_logo_icon_170919.png';

function MoviePage() {
    return(
        <div className="movie-page">
            <Nav />
            <div className="details-container">
                <div className="gradient">
                    <img className='n-logo' src={Nlogo} alt="Netflix N logo" />
                    <h3 className="movie-name">The Silence</h3>
                    <div className="movie-info">
                        <p className="date">2019</p>
                        <div className="age-rating">16+</div>
                        <p className="duration">1h 30m</p>
                        <p className="genre">Horror</p>
                    </div>
                    <p className="movie-description">With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.</p>
                    <p className="starring"><span style={{color: 'rgb(161, 161, 161)'}}>Starring:</span>Stanley Tucci, Kiernan Shipka, Miranda Otto</p>
                </div>
            </div>
        </div>
    )
}

export default MoviePage