import "./Header.css";
import { Link } from "react-router-dom";
import StrongFencingLogo from "../StrongFencingLogo.jpg";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    
      <div className="header-container">
      <h1 className="StrongFencing">Strong Fencing</h1>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
          
          <li className="nav-item">
            <Link to="/quote" className="nav-link">
              Request a Quote
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Create New Job
            </Link>
          </li>
          <li className="nav-item">
            <LoginButton />
          </li>
        </ul>
      </div>
  );
};

export default Header;