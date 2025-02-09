import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "../lib/axios";

function useBookingDetails() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState("");

  console.log(booking);

  useEffect(() => {
    async function fecthBooking() {
      try {
        const res = await axios.get(`/bookings/${bookingId}`);
        setBooking(res.data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fecthBooking();
  }, [bookingId]);

  async function handleUpdate() {
    try {
      const res = await axios.patch(`/bookings/${bookingId}`, {
        status: formData,
        checkInDate: booking.checkInDate,
        checkOutDate: booking.checkOutDate,
        roomId: booking.roomId._id,
      });
      setBooking(res.data.data);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setIsEditing(false);
    }
  }

  return {
    booking,
    isEditing,
    setIsEditing,
    formData,
    setFormData,
    handleUpdate,
  };
}

export default useBookingDetails;
