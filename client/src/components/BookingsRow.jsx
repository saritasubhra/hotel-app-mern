import { format } from "date-fns";
import { Link } from "react-router-dom";
function BookingsRow({ booking }) {
  const {
    roomId: { roomname },
    userId: { fullname },
    checkInDate,
    checkOutDate,
    status,
    _id,
  } = booking;

  let statusStyle;
  if (status === "paid") statusStyle = "gray";
  if (status === "checked-in") statusStyle = "green";
  if (status === "checked-out") statusStyle = "blue";

  return (
    <div className="grid grid-cols-6 items-center capitalize py-2 text-center border-b border-stone-300">
      <div>{fullname}</div>
      <div>{roomname}</div>
      <div>{format(new Date(checkInDate), "dd-MM-yyyy")}</div>
      <div>{format(new Date(checkOutDate), "dd-MM-yyyy")}</div>
      <div>
        <span className={statusStyle}>{status}</span>
      </div>
      <Link to={`/admin/bookings/${_id}`}>
        <button className="btn-violet-sm">See Details</button>
      </Link>
    </div>
  );
}

export default BookingsRow;
