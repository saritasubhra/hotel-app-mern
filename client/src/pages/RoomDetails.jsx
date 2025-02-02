import { BedDouble, Scan, Users } from "lucide-react";
// import { room } from "../../public/data";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import useRoomDetails from "../hooks/useRoomDetails";
import Spinner from "../components/Spinner";
import { useBooking } from "../context/BookingContext";
import { differenceInDays } from "date-fns";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function RoomDetails() {
  const { auth } = useAuth();
  const { room } = useRoomDetails();
  const { dates, setDates, guests, setGuests } = useBooking();
  const numNights = differenceInDays(dates.to, dates.from) || 0;

  if (!room) return <Spinner />;

  const { roomname, price, image, capacity, bed, area, description } = room;
  return (
    <div className="py-10 px-6 sm:px-16 max-w-7xl mx-auto">
      <div className=" grid lg:grid-cols-2 gap-8 mb-16">
        <div>
          <img
            src={image}
            alt={roomname}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-4 space-y-2">
          <h1 className="text-5xl font-serif capitalize">{roomname}</h1>
          <p className="font-thin">{description}</p>
          <p>
            <Scan className="mr-4 inline" size={20} />
            {area} sq. ft.
          </p>
          <p>
            <BedDouble className="mr-4 inline" size={20} />
            {bed} king size bed{bed > 1 ? "s" : ""}
          </p>
          <p>
            <Users className="mr-4 inline" size={20} />
            fits upto {capacity} guests
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 ">
        <DayPicker
          mode="range"
          selected={dates}
          onSelect={setDates}
          disabled={[{ before: new Date() }]}
          numberOfMonths={2}
          className="mx-auto"
          modifiersClassNames={{
            range_start: "bg-black text-white",
            range_end: "bg-black text-white ",
            range_middle: "bg-gray-300 text-black",
            selected: "rounded-full",
            disabled: "text-gray-300",
          }}
        />
        <div className="flex-1 flex flex-col justify-between ">
          <div>
            <label className="label">Number of Geusts</label>
            <select
              required
              name="guests"
              className="input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="">Select...</option>
              {Array.from({ length: capacity }, (_, i) => i + 1).map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">Number of Nights</label>
            <input type="text" value={numNights} className="input" disabled />
          </div>

          <div>
            <label className="label">Total Price</label>
            <input
              type="text"
              value={numNights * price}
              className="input disabled:opacity-60"
              disabled
            />
          </div>

          {auth ? (
            <button className="btn-black" disabled={!numNights || !guests}>
              Book Now
            </button>
          ) : (
            <Link to="/login">
              <button className="btn-black w-full">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
