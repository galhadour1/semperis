import { useState } from "react";
import "../styles/SerachBar.css";
import { API_KEY, URLS } from "../utils/constans";
import { useAppDispatch } from "../hooks";
import { updateMovies } from "../redux/actions/moviesActions";

const SerachBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchWord, setSearchWord] = useState("");

  const handleSearchMovies = async () => {
    const fetchFoundMoviesUrl = `${URLS.BASE_URL}/search/movie?api_key=${API_KEY}&with_origin_country=IN&language=en-US&query=${searchWord}&page=1&include_adult=false`;
    try {
      const data = await fetch(fetchFoundMoviesUrl);
      const foundMovies = await data.json();
      dispatch(updateMovies(foundMovies.results));
    } catch (error) {
      console.error("Error search movies:", error);
    }
  };

  

  return (
    <div className="search-container">
      <input
        type="search"
        name="searchbar"
        id="searchbar"
        placeholder="Search Movie"
        className="searchbar-input"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearchMovies}>
        Search
      </button>
    </div>
  );
};

export default SerachBar;
