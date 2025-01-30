import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between px-8 py-4 fixed z-10 bg-white w-screen">
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
        <NavLink to="/signup">
          <li>Signup</li>
        </NavLink>
        <NavLink to="/login">
          <li>Login</li>
        </NavLink>
      </ul>
    </header>
  );
}

export default Navbar;
