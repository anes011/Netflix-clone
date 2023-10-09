import '../styles/nav.css';
import NetflixLogo from '../images & logos/Netflix_Logo_RGB.png';
import ProfileLogo from '../images & logos/Netflix-avatar.png';

function Nav() {
    return(
        <div className="nav">
            <div className="right-section">
                <img className='netflix-logo' src={NetflixLogo} alt="Netflix logo" />
                <button className="home-btn">Home</button>
                <button className="tv-shows-btn">TV Shows</button>
                <button className="movies">Movies</button>
                <button className="recently-added">Recently Added</button>
                <button className="mylist-btn">My List</button>
            </div>

            <div className="left-side">
                <button className="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                </button>
                <button className="kids-btn">KIDS</button>
                <button className="dvd-btn">DVD</button>
                <button className="notifications-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                    </svg>
                </button>
                <button className="profile-btn">
                    <img src={ProfileLogo} alt="Profile logo" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" fill='#fff'></path></svg>
                </button>
            </div>
        </div>
    )
}

export default Nav;