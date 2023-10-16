import Nav from '../components/Nav';
import Movies from '../components/Movies';
import UpcomingSlider from '../components/UpcomingSlider';
import TrendingSlider from '../components/TrendingSlider';

function Main() {
    return(
        <div className="main">
            <Nav />
            <Movies />
            <UpcomingSlider />
            <TrendingSlider />
        </div>
    )
}

export default Main;