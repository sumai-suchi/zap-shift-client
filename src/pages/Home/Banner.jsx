import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import heroImg1 from "../../assets/banner/banner1.png";
import heroImg2 from "../../assets/banner/banner2.png";
import heroImg3 from "../../assets/banner/banner3.png";
import { FaArrowUp } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="my-12">
      <Carousel autoPlay="true" infiniteLoop="true">
        <div className="relative ">
          <img src={heroImg1} className="" />
          <div className="absolute bottom-12 left-8 z-20 flex justify-center items-center gap-1">
            <h1 className="bg-primary text-black rounded-4xl p-4 ">
              Track Your Parcel
            </h1>
            <span className=" size-8 rotate-45 bg-black text-white p-2 rounded-full">
              <FaArrowUp />
            </span>
            <button className="bg-white text-black  px-2 py-1.5 border rounded-xs border-gray-200">
              be a rider
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg2} />
          <div className="absolute bottom-14 left-8 z-20 flex justify-center items-center gap-1">
            <h1 className="bg-primary text-black rounded-4xl p-4 ">
              Track Your Parcel
            </h1>
            <span className=" size-8 rotate-45 bg-black text-white p-2 rounded-full">
              <FaArrowUp />
            </span>
            <button className="bg-white text-black  px-2 py-1.5 border rounded-xs border-gray-200">
              be a rider
            </button>
          </div>
        </div>
        <div>
          <img src={heroImg3} />
          <div className="absolute bottom-14 left-8 z-20 flex justify-center items-center gap-1">
            <h1 className="bg-primary text-black rounded-4xl p-4 ">
              Track Your Parcel
            </h1>
            <span className=" size-8 rotate-45 bg-black text-white p-2 rounded-full">
              <FaArrowUp />
            </span>
            <button className="bg-white text-black  px-2 py-1.5 border rounded-xs border-gray-200">
              be a rider
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
