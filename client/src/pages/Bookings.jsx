import BookingsRow from "../components/BookingsRow";
import Spinner from "../components/Spinner";
import useBookings from "../hooks/useBookings";

function Bookings() {
  const { bookings } = useBookings();

  if (!bookings.length) return <Spinner />;
  return (
    <div className="min-w-[1024px] lg:overflow-x-hidden overflow-x-scroll">
      <header className="grid grid-cols-6 text-center items-center uppercase font-bold mt-8 overflow-x-auto">
        <div>Name</div>
        <div>Room</div>
        <div>Arrival</div>
        <div>Departure</div>
        <div>Status</div>
        <div>Details</div>
      </header>
      {bookings?.map((item) => (
        <BookingsRow key={item.id} booking={item} />
      ))}
    </div>
  );
}

export default Bookings;
