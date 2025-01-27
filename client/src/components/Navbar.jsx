import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between p-4">
      <div>XXXXX</div>
      <ul className="flex gap-10">
        <NavLink to="/">
          <li>Overview</li>
        </NavLink>
        <NavLink to="/rooms">
          <li>Rooms</li>
        </NavLink>
        <NavLink to="/dining">
          <li>Dining</li>
        </NavLink>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
