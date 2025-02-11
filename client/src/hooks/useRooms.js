import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function useRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fecthAllRooms();
  }, []);

  async function fecthAllRooms() {
    try {
      const res = await axios.get("/rooms");
      console.log("called");
      setRooms(res.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return { rooms };
}

export default useRooms;
