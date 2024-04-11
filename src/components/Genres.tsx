import { useEffect } from "react";
import "../styles/Genres.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateGenres } from "../redux/actions/genresActions";
import { URLS } from "../utils/constans";
import { RootState } from "../redux/store";
import { updateSelectedGenre } from "../redux/actions/selectedGenreActions";
import Genre from "../interfaces/Genre";
import { updateMovies } from "../redux/actions/moviesActions";

const Genres: React.FC = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state: RootState) => state.genres.genres);
  const selectedGenre = useAppSelector(
    (state: RootState) => state.selectedGenre.selectedGenre
  );

  useEffect(() => {
   
    fetchGenres();
  }, []);

  // useEffect(() => { 
  // }, [selectedGenre]);

  const fetchGenres = async (): Promise<void> => {
    const fetchGenreUrl = `${URLS.BASE_URL}${URLS.FETCH_GENRES}?${URLS.QUERY_PARAMETERS}`;
    try {
      const data = await fetch(fetchGenreUrl);
      const genres = await data.json();
      dispatch(updateGenres(genres.genres));
      dispatch(updateSelectedGenre(genres.genres[0]));
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const handleSelectedGenre=(genre:Genre)=>{
   
    dispatch(updateSelectedGenre(genre));
  }

  return (
    <div className="genres-container">
      {genres?.map((genre) => (
        <button
          className={
            selectedGenre?.id === genre.id ? "genre-btn selected" : "genre-btn"
          }
          key={genre.id}
          onClick={() => handleSelectedGenre(genre)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default Genres;
