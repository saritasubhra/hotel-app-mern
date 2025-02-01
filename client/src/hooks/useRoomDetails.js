import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function useRoomDetails() {
  const [room, setRoom] = useState();
  const { roomId } = useParams();

  useEffect(() => {
    async function fecthRoom() {
      try {
        const res = await axios.get(`/rooms/${roomId}`);
        console.log(res);
        setRoom(res.data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fecthRoom();
  }, [roomId]);

  return { room };
}

export default useRoomDetails;
