import SearchResults from "../components/SearchResults";
import Nav from "../components/Nav";
import SearchDescription from "../components/SearchDescription";

function SearchPage() {
    return(
        <div className="search-page">
            <Nav />
            <SearchDescription />
            <SearchResults />
        </div>
    )
}

export default SearchPage;