import "../styles/NavBar.css";
import Genres from "./Genres";


const NavBar: React.FC = () => {
  return (
    <div className="navbar-conatiner">
      <Genres />
    </div>
  );
};

export default NavBar;
