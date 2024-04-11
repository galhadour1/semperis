import Movies from "../components/Movies";
import NavBar from "../components/NavBar";
import SerachBar from "../components/SerachBar";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/store";
import "../styles/Main.css";

const Main: React.FC = () => {
  const movies = useAppSelector((state: RootState) => state.movies.movies);

  return (
    <div className="main-container">
      <div className="main-body">
        <div className="main-left">
          <SerachBar />
          <NavBar />
        </div>
        <div className="main-right">
          <h1 className="main-header">Gal's Movies App</h1>
         {movies?.length===0?"Movies Not Found":<Movies />} 
        </div>
      </div>
    </div>
  );
};

export default Main;
