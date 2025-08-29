import HeroSection from "../sections/home/HeroSection";
import HomeCta from "../sections/home/HomeCta";
import ServicesSection from "../sections/home/ServicesSection";
import VideoHome from "../sections/home/VideoHome";

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="py-50">
        <HomeCta />
      </div>

      <VideoHome />

      <div className="py-50 px-6 lg:px-12">
        <ServicesSection />
      </div>
    </>
  );
};

export default Home;
