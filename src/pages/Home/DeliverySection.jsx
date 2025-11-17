import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";

const DeliverySection = () => {
  return (
    <div className="my-14">
      <h1 className="text-secondary font-semibold text-xl my-3 ml-2.5">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DeliveryCard
          heading={"Booking Pick & Drop"}
          info={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></DeliveryCard>
        <DeliveryCard
          heading={"Cash On Delivery"}
          info={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></DeliveryCard>
        <DeliveryCard
          heading={"Delivery Hub"}
          info={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></DeliveryCard>
        <DeliveryCard
          heading={"Booking SME & Corporate"}
          info={
            "From personal packages to business shipments — we deliver on time, every time."
          }
        ></DeliveryCard>
      </div>
    </div>
  );
};

export default DeliverySection;
