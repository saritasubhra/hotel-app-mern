import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "../lib/axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";

function Navbar() {
  const { auth, setAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {
    try {
      setIsLoading(true);
      const res = await axios.get("/auth/logout");
      toast.success(res.data.message);
      localStorage.removeItem("harmony");
      setAuth(null);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
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
            {isLoading ? (
              <Loader color="#ffffff" className="animate-spin mx-auto" />
            ) : (
              "Log out"
            )}
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
