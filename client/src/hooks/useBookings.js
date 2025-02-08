import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function useBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fecthAllBookings();
  }, []);

  async function fecthAllBookings() {
    try {
      const res = await axios.get("/bookings");
      setBookings(res.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return { bookings };
}

export default useBookings;
