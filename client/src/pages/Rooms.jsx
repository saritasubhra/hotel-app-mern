import { rooms } from "../../public/data";
import RoomCard from "../components/RoomCard";

function Rooms() {
  return (
    <div className="px-6 sm:px-16 py-10 text-center space-y-6 ">
      <h1 className="text-5xl sm:text-6xl uppercase font-serif">Villas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        corrupti facere quidem ex et a ab, cumque qui consequuntur excepturi eos
        dolorum voluptatibus exercitationem, autem, illum perferendis nobis
        perspiciatis maxime? Deserunt nemo tempora doloremque natus dolores a
        officia iure ullam possimus. Fugit adipisci corporis error temporibus
        consectetur numquam necessitatibus, quibusdam illum impedit fugiat
        tempore, quisquam accusantium sunt molestiae perferendis natus. Neque
        totam vitae consequatur sunt. Facilis, saepe est. Veritatis blanditiis
        cupiditate dolorem velit sunt tenetur atque, ipsam voluptatum amet eius
        repellendus eos voluptas modi sequi ad aspernatur omnis sed quia.
      </p>
      <div className="mt-14 max-w-6xl mx-auto">
        <ul className="grid lg:grid-cols-2 gap-20 md:px-32 lg:px-0">
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Rooms;
