import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Dining from "./pages/Dining";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import PageNotFound from "./pages/PageNotFound";
import { useAuth } from "./context/AuthContext";
import CreateRoom from "./pages/CreateRoom";
import Bookings from "./pages/Bookings";
import AdminLayout from "./components/AdminLayout";
import BookingDetails from "./pages/BookingDetails";

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={auth ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={auth ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/dining" element={<Dining />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<RoomDetails />} />
          <Route path="/purchase-success" element={<Success />} />
          <Route path="/purchase-cancel" element={<Cancel />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate replace to="create-room" />} />
            <Route path="create-room" element={<CreateRoom />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<BookingDetails />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
