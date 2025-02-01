import { Link } from "react-router-dom";
import { Users } from "lucide-react";

function RoomCard({ room }) {
  const { _id, roomname, price, image, capacity } = room;
  return (
    <li className="flex flex-col shadow-2xl">
      <div className="h-[200px] sm:h-[300px] w-full">
        <img
          src={image}
          alt={roomname}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-left p-4 space-y-1">
        <p className="text-3xl font-serif capitalize">{roomname}</p>

        <p className="border-b border-neutral-600 pb-4">
          <Users className="mr-4 inline" size={20} />
          fits upto {capacity} guests
        </p>
        <div className="flex justify-between mt-4">
          <span>
            <span className="font-semibold text-2xl text-neutral-600">
              &#8377;.{price}.00
            </span>
            <br />
            /night
          </span>
          <Link to={`/rooms/${_id}`}>
            <button className="btn-black">View more</button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default RoomCard;
