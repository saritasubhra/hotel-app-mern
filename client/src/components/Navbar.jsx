import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";

function Navbar() {
  const { auth } = useAuth();
  const { isLoading, handleLogout } = useLogout();

  return (
    <header className="flex justify-between px-8 py-4 fixed z-10 bg-white w-screen">
      <div>XXXXX</div>
      <ul className="flex items-center gap-10">
        <NavLink to="/">
          <li>Overview</li>
        </NavLink>
        <NavLink to="/rooms">
          <li>Rooms</li>
        </NavLink>
        <NavLink to="/dining">
          <li>Dining</li>
        </NavLink>
        {auth ? (
          <button
            className="btn-black"
            onClick={handleLogout}
            disabled={isLoading}
          >
            Log out
          </button>
        ) : (
          <>
            <NavLink to="/signup">
              <li>Signup</li>
            </NavLink>
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
          </>
        )}
      </ul>
    </header>
  );
}

export default Navbar;
