import Movies from "../components/Movies";
import NavBar from "../components/NavBar";
import SerachBar from "../components/SerachBar";
import "../styles/Search.css";

const Search: React.FC = () => {
  return (
    <div className="main-container">
      <h1>Gal's Movies App</h1>
      <div className="main-body">
        <div className="main-side-wrapper">
          <SerachBar />
          <NavBar />
        </div>
        <Movies />
      </div>
    </div>
  );
};

export default Search;
