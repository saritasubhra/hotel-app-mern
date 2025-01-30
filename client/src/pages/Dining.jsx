import { dining } from "../../public/data";
import DiningCard from "../components/DiningCard";

function Dining() {
  return (
    <div className="px-6 sm:px-16 py-10 text-center space-y-6 ">
      <h1 className="text-5xl sm:text-6xl uppercase font-serif">Dining</h1>
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

      <ul className="mt-14 max-w-4xl mx-auto">
        {dining.map((item) => (
          <DiningCard key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Dining;
