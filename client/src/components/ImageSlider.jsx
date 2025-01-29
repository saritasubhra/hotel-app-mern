import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="px-8 lg:max-w-4xl 2xl:max-w-6xl mx-auto">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div key={i} className="px-4">
            <div className="h-[200px] sm:h-[400px] 2xl:h-[600px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className=" sm:text-2xl text-center font-serif pt-4">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;

const PrevArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      left: "-30px",
      top: "50%",
      transform: "translateY[-50%]",
      zIndex: 1,
      cursor: "pointer",
      background: "white",
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    <ChevronLeft size={30} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      right: "-30px",
      top: "50%",
      transform: "translateY[-50%]",
      zIndex: 1,
      cursor: "pointer",
      // color:"black",
      background: "white",
      borderRadius: "50%",
    }}
    onClick={onClick}
  >
    <ChevronRight size={30} />
  </div>
);
