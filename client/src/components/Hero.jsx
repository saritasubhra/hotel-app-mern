function Hero() {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute w-full h-full bg-gradient-to-r from-black to-black z-[2] opacity-25 "></div>
      <div className="absolute para w-full h-full z-[3] flex flex-col gap-10 items-center justify-center px-4 md:px-40 xl:px-60">
        <p className="text-5xl text-white font-serif">About us</p>
        <p className="pg font-normal text-white 2xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          voluptatem aliquid iure deserunt animi officiis iusto rem quis tenetur
          dolorum nulla, natus nobis ad, voluptatibus odio sit facere
          praesentium saepe. Ipsum error, ut voluptas, veritatis inventore optio
          quos vel in est recusandae natus suscipit ipsa tenetur quas, neque
          ipsam quam? Maiores, quam at voluptatum dolor placeat autem hic
          numquam alias.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button>Reserve Room</button>
          <button>Reserve table</button>
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
