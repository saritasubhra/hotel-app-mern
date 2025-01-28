import { BedDouble, Scan, Users } from "lucide-react";
import { room } from "../../public/data";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function RoomDetails() {
  const { name, price, image, capacity, bed, area, description } = room;
  return (
    <div className="py-10 px-10 max-w-7xl mx-auto">
      <div className=" grid grid-cols-2 gap-8 mb-16">
        <div>
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="p-8 space-y-2">
          <h1 className="text-5xl font-serif">{name}</h1>
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

      <div className="flex">
        <DayPicker
          mode="range"
          disabled={[{ before: new Date() }]}
          numberOfMonths={2}
          modifiersClassNames={{
            range_start: "bg-black text-white",
            range_end: "bg-black text-white ",
            range_middle: "bg-gray-300 text-black",
            selected: "rounded-full",
            disabled: "text-gray-300",
          }}
        />
        <div className="flex-1 flex flex-col justify-between pl-8">
          <div>
            <label className="label">Number of Geusts</label>
            <select required name="guests" className="input">
              {Array.from({ length: capacity }, (_, i) => i + 1).map((x) => (
                <option key={x} value={x}>
                  {x}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="label">Number of Nights</label>
            <input type="text" value={5} className="input" />
          </div>

          <div>
            <label className="label">Total Price</label>
            <input type="text" value={price} className="input" />
          </div>
          <button className="btn-black">Start by selecting dates</button>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
