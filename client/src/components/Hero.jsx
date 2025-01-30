import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-screen h-[50vh] sm:h-screen relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-black to-transparent to-70% z-[2] opacity-65 "></div>
      <div className="absolute w-full h-full z-[3] grid md:grid-cols-2 items-center">
        <div className=" p-6 sm:p-20 space-y-4">
          {" "}
          <p className="text-5xl text-white font-serif">About us</p>
          <p className=" text-white 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptatem aliquid iure deserunt animi officiis iusto rem quis
            tenetur dolorum nulla, natus nobis ad, voluptatibus odio sit facere
            praesentium saepe. Ipsum error, ut voluptas, veritatis inventore
            optio quos vel in est recusandae natus suscipit ipsa tenetur quas.
          </p>
          <div className="flex gap-6">
            <Link to="/rooms">
              <button className="btn-white">Explore Rooms</button>
            </Link>
            <Link to="/dining">
              <button className="btn-white">Explore table</button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="./hotel.jpg"
        alt="heroImage"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default Hero;
