import { useContext, useEffect, useRef, useState } from "react";
import movieData from "../Context";


function SearchDescription() {

    const { infoTarget } = useContext(movieData);

    const title = useRef(null);
    const description = useRef(null);

    const [infoReady, setInfoReady] = useState(false);

    useEffect(() => {
        if (infoTarget === null) {
            setInfoReady(false);
        }else {
            setInfoReady(true);
            if (title.current && description.current) {
                title.current.textContent = infoTarget.title;
                description.current.textContent = infoTarget.overview;
            }
        }
    });

    return(
        <div className="search-description">
            <h1 ref={title} className={!infoReady ? 'title' : 'title-active'}></h1>
            <p ref={description} className={!infoReady ? 'description' : 'description-active'}></p>
        </div>
    )
}

export default SearchDescription;