import { NavLink, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="p-10">
      <nav className="text-center space-x-4 pb-10">
        <NavLink to="/admin/create-room">
          <button>Create Room</button>
        </NavLink>
        <NavLink to="/admin/bookings">
          <button>All Bookings</button>
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
