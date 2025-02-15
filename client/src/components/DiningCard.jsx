import { Clock } from "lucide-react";

function DiningCard({ item }) {
  const { roomname, open, type, image, description } = item;
  return (
    <div className="grid md:grid-cols-2 gap-2 md:gap-8 mb-16 text-left shadow-2xl">
      <div>
        <img
          src={image}
          alt={roomname}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="text-3xl font-serif">{roomname}</h1>
        <p className="text-sm">{type}</p>
        <p className="font-thin">{description}</p>

        <p>
          <Clock className="mr-4 inline" size={20} />
          {open}
        </p>
      </div>
    </div>
  );
}

export default DiningCard;
