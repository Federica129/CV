import logo from "./logo fs.jpeg";
import "./Nav.css";

function Nav() {
  return (
    <div className="main-nav">
      <header className="main-header">
        <img src={logo} alt="logo" />
        <h2>My portfolio</h2>
      </header>
      <nav className="main-nav2">
        <ul>
          <li>
            <a href="#Aboutme">About me</a>
          </li>
          <li>
            <a href="#Myprojects">My projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
