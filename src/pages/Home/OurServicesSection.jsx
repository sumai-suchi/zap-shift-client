import OurServiceSectionCard from "../../Components/OurServiceSectionCard/OurServiceSectionCard";

const OurServicesSection = () => {
  return (
    <div className="bg-secondary rounded-2xl">
      <div className="flex flex-col pt-8 justify-center items-center gap-2">
        <h1 className="text-white font-bold text-2xl">Our Services</h1>
        <p className="text-[#DADADA] w-3xl text-center  text-xs">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div className=" rounded-2xl p-24 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Express  & Standard Delivery"}
        ></OurServiceSectionCard>
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Nationwide Delivery"}
        ></OurServiceSectionCard>
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Fulfillment Solution"}
        ></OurServiceSectionCard>
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Cash on Home Delivery"}
        ></OurServiceSectionCard>
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Corporate Service / Contract In Logistics"}
        ></OurServiceSectionCard>
        <OurServiceSectionCard
          info={
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants."
          }
          heading={"Parcel Return"}
        ></OurServiceSectionCard>
      </div>
    </div>
  );
};

export default OurServicesSection;
