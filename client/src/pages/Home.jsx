import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";
import { dining } from "../../public/data";
import { rooms } from "../../public/data";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="space-y-32">
      <Hero />

      <div className="px-24 text-center">
        <h1 className="text-5xl font-serif pb-4">Discover Island Living</h1>
        <p className="font-thin leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          blanditiis atque odit ad amet, enim aperiam dolor molestias? Aperiam
          quisquam sit architecto nam quam laudantium ad quia veniam, dolore
          iusto. Commodi velit, ducimus aliquid eius maxime fuga veniam odio
          eligendi. Culpa at dolorum in velit sunt placeat laboriosam
          perferendis excepturi mollitia quis, repellat praesentium totam,
          animi, dicta accusamus illo neque? Iusto nam facere dolorum. Fugit
          voluptas odit hic maiores voluptatum, consequatur neque provident
          laudantium dolores ipsum facere blanditiis impedit quos ipsam quaerat
          autem? Nam nisi voluptates quis earum consequuntur inventore
          consequuntur inventore?
        </p>
      </div>

      <div className="p-16 grid grid-cols-2 gap-8 bg-[#e9f1fa]">
        <div>
          <img
            src="./7.webp"
            alt="jnk"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-16 space-y-4">
          <h1 className="text-3xl font-serif">Rooms & Suites</h1>
          <p className="font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, error
            voluptas illum nam enim iusto, quia recusandae quae esse
            voluptatibus fugit neque, ducimus autem exercitationem itaque
            laborum officiis. Doloremque, mollitia.
          </p>
          <Link to="/rooms">
            <button className="border-b-2 border-black py-2 font-semibold cursor-pointer capitalize">
              Explore Now →{" "}
            </button>
          </Link>
        </div>
      </div>

      <ImageSlider data={rooms} />

      <div className="px-24 text-center">
        <h1 className="text-5xl font-serif pb-4">
          Exclusive Dining Experience
        </h1>
        <p className="font-thin leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          blanditiis atque odit ad amet, enim aperiam dolor molestias? Aperiam
          quisquam sit architecto nam quam laudantium ad quia veniam, dolore
          iusto. Commodi velit, ducimus aliquid eius maxime fuga veniam odio
          eligendi. Culpa at dolorum in velit sunt placeat laboriosam
          perferendis excepturi mollitia quis, repellat praesentium totam,
          animi, dicta accusamus illo neque? Iusto nam facere dolorum. Fugit
          voluptas odit hic maiores voluptatum, consequatur neque provident
          laudantium dolores ipsum facere blanditiis impedit quos ipsam quaerat
          autem? Nam nisi voluptates quis earum consequuntur inventore
          consequuntur inventore?
        </p>
      </div>

      <div className="p-16 grid grid-cols-2 gap-8 bg-[#e9f1fa]">
        <div>
          <img
            src="./arabian-grill.jpg"
            alt="jnk"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-16 space-y-4">
          <h1 className="text-3xl font-serif">Dining</h1>
          <p className="font-thin">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, error
            voluptas illum nam enim iusto, quia recusandae quae esse
            voluptatibus fugit neque, ducimus autem exercitationem itaque
            laborum officiis. Doloremque, mollitia.
          </p>
          <Link to="/dining">
            <button className="border-b-2 border-black py-2 font-semibold cursor-pointer capitalize">
              Explore Now →{" "}
            </button>
          </Link>
        </div>
      </div>

      <ImageSlider data={dining} />
    </div>
  );
}

export default Home;
