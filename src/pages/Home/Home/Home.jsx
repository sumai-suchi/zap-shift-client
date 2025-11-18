import Banner from "../Banner";
import DeliverySection from "../DeliverySection";
import OurServicesSection from "../OurServicesSection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <DeliverySection></DeliverySection>
      <OurServicesSection></OurServicesSection>
    </div>
  );
};

export default Home;
