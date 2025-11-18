import OurCardImg from "../../assets/allImages/service.png";
const OurServiceSectionCard = ({ heading, info }) => {
  return (
    <div>
      <div className="bg-white w-full hover:bg-primary h-72 flex flex-col justify-center items-center  text-base-50 p-8  rounded-2xl space-y-4">
        <div className="w-12 h-12 rounded-full  bg-linear-to-b from-[#EEEDFC] to-[#EEEDFC]">
          <img src={OurCardImg} alt="" />
        </div>
        <h1 className="text-secondary font-semibold">{heading}</h1>
        <p className="text-sm">{info}</p>
      </div>
    </div>
  );
};

export default OurServiceSectionCard;
