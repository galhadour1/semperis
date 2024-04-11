import { useLocation, useNavigate } from "react-router-dom";
import "../styles/MovieDetails.css";
import { API_KEY, URLS } from "../utils/constans";
import { useEffect, useState } from "react";
import Credit from "../interfaces/Credit";

interface Credits {
  cast: Credit[];
  crew: Credit[];
}

const MovieDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [credits, setCredits] = useState<Credits | null>(null);
  const [actors, setActors] = useState<Credit[] | undefined>([]);
  const [directors, setDirectors] = useState<Credit[] | undefined>([]);

  const selectedMovie = location.state.selectedMovie;

  useEffect(() => {
    fetchCreditsMovie();
    filterActors();
    filterDirectors();
  }, [credits]);

  const filterActors = () => {
    const filteredActors = credits?.cast.filter(
      (credit) => credit["known_for_department"] === "Acting"
    );
    setActors(filteredActors);
  };

  const filterDirectors = () => {
    const filteredDirectors = credits?.crew.filter(
      (credit) => credit["known_for_department"] === "Directing"
    );
    setDirectors(filteredDirectors);
  };

  const fetchCreditsMovie = async () => {
    const fetchCreditsUrl = `${URLS.BASE_URL}/movie/${selectedMovie.id}/credits?api_key=${API_KEY}`;
    try {
      const data = await fetch(fetchCreditsUrl);
      const credits = await data.json();
      setCredits(credits);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const navigateBackPage = () => {
    navigate("/");
  };

  return (
    <div className="movie-details-container">
      <img
        alt={selectedMovie.title}
        src={URLS.FETCH_IMG + selectedMovie.poster_path}
        className="movie-details-img"
      />
      <div className="movie-details-right">
        <div className="movie-details-text-wrapper">
          <h1 className="movie-title">{selectedMovie.title}</h1>
          <p className="movie-overview">{selectedMovie.overview}</p>
          <div className="release-date">
            Release Date: {selectedMovie.release_date}
          </div>
          {/* <div className='runtime'>Runtime: {selectedMovie.runtime} minutes</div> */}
          <div className="popularity">
            Popularity: {selectedMovie.popularity}
          </div>
          <div className="actors-wrapper">
            <h2>Actors:</h2>
            {actors?.map((actor) => (
              <label>{actor.name},</label>
            ))}
          </div>
          <div className="director-wrapper">
            <h2>Directors:</h2>
            {directors?.map((director) => (
              <label>{director.name}, </label>
            ))}
          </div>
        </div>
        <button className="back-btn" onClick={navigateBackPage}>
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
