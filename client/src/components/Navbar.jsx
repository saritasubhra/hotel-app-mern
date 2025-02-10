import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useLogout from "../hooks/useLogout";
import { Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const { auth } = useAuth();
  const { isLoading, handleLogout } = useLogout();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex justify-between px-8 py-4 fixed z-10 bg-white w-screen">
      <div className="text-5xl">XXXXX</div>
      <ul className={`${showMenu ? "nav-mobile" : "nav-desk"} `}>
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
      <button
        className="sm:hidden"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <Menu />
      </button>
    </header>
  );
}

export default Navbar;
