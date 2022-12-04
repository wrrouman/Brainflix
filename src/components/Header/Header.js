import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="Header__container-flex">
          <div>
            <Link to="/">
              {" "}
              <img className="Header-logo" src={logo} alt="logo" />
            </Link>
          </div>

          <div className="search__avatar--container">
            <input type="text" id="search" placeholder="Search" />
            <img id="avatar" src={avatar} alt="upload" />
          </div>

         
            <div className="upload__button--container">
            <Link to="/Upload">  <button id="upload">UPLOAD</button></Link>
            </div>
          
          <img id="avatar-2" src={avatar} alt="upload" />
        </div>
      </header>
    </>
  );
}

export default Header;
