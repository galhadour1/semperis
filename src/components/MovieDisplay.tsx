import Movie from "../interfaces/movie";
import "../styles/MovieDisplay.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { URLS } from "../utils/constans";
import { useNavigate } from "react-router-dom";

interface MovieDisplayProps {
  movie: Movie;
}

const MovieDisplay: React.FC<MovieDisplayProps> = ({ movie }) => {
  const navigate = useNavigate();

  const onClickMovie = () => {
    navigate("/movieDetails", { state: { selectedMovie: movie } });
  };

  return (
    <div className="movie-display-container" onClick={onClickMovie}>
      <LazyLoadImage
        effect="blur"
        className="movie-img"
        src={URLS.FETCH_IMG + movie.poster_path}
      />
      <div className="movie-name">{movie.title}</div>
    </div>
  );
};

export default MovieDisplay;
