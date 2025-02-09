import useBookingDetails from "../hooks/useBookingDetails";
import Spinner from "../components/Spinner";
import { format } from "date-fns";

function BookingDetails() {
  const {
    booking,
    isEditing,
    setIsEditing,
    formData,
    setFormData,
    handleUpdate,
  } = useBookingDetails();

  if (!booking) return <Spinner />;

  const {
    userId: { fullname },
    roomId: { roomname },
    checkInDate,
    checkOutDate,
    totalAmount,
    status,
    _id,
    guests,
  } = booking;

  return (
    <div className="space-y-6 ">
      <h1 className="text-2xl font-semibold">BookingID: {_id}</h1>

      <div>
        <p>
          <span className="font-semibold text-lg">Arrival - </span>
          {format(new Date(checkInDate), "iiii dd MM yyyy")}
        </p>
        <p>
          <span className="font-semibold text-lg">Departure - </span>
          {format(new Date(checkOutDate), "iiii dd MM yyyy")}
        </p>
      </div>

      <div>
        <p>
          <span className="font-semibold text-lg"> Name: </span>
          {fullname}
        </p>
        <p>
          <span className="font-semibold text-lg"> Room: </span>
          {roomname}
        </p>
        <p>
          <span className="font-semibold text-lg">Guests: </span>
          {guests}
        </p>
        <p>
          <span className="font-semibold text-lg">Paid: </span>
          Rs.{totalAmount}.00
        </p>
      </div>

      {isEditing ? (
        <select
          name="status"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="paid">Paid</option>
          <option value="checked-in">Checked-in</option>
          <option value="checked-out">Checked-out</option>
        </select>
      ) : (
        <span className="text-2xl text-red-600">{status}</span>
      )}
      {status === "checked-out" ? null : isEditing ? (
        <>
          <button className="btn-violet-sm mr-2" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn-violet-sm" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <button className="btn-violet-sm" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
}

export default BookingDetails;
