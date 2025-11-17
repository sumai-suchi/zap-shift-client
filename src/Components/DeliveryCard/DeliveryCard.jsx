import textImg from "../../assets/allImages/bookingIcon.png";
const DeliveryCard = ({ heading, info }) => {
  return (
    <div className="bg-white text-base-50 p-6 rounded-2xl space-y-3">
      <img src={textImg} alt="" />
      <h1 className="text-secondary font-semibold">{heading}</h1>
      <p className="text-sm">{info}</p>
    </div>
  );
};

export default DeliveryCard;
