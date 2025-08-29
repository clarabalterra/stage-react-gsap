import HeroSection from "../sections/home/HeroSection";
import HomeCta from "../sections/home/HomeCta";
import NumbersSection from "../sections/home/NumbersSection";
import ProjectsSection from "../sections/home/ProjectsSection";
import ServicesSection from "../sections/home/ServicesSection";
import VideoHome from "../sections/home/VideoHome";


const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="pt-50">
        <HomeCta />
      </div>

      <div className="pt-50">
        <VideoHome />
      </div>

      <div className="pt-50 px-6 lg:px-12">
        <ServicesSection />
      </div>


      <div className="pt-50">
        <ProjectsSection />
      </div>
      <div className="pt-50">
        <NumbersSection />
      </div>

    </>
  );
};

export default Home;
