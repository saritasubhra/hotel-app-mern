import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import AppLayout from "./components/AppLayout";
import RoomDetails from "./pages/RoomDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<RoomDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
