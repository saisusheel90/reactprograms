import "./Navbar.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li>Home</li>

        <li className="dropdown">
          Services
          <ul className="dropdown-menu">
            <li>Web Development</li>
            <li>App Development</li>
            <li>AI Solutions</li>
          </ul>
        </li>

        <li>About</li>
        <li>Contact</li>

      </ul>
    </nav>
  );
}

export default Nav;