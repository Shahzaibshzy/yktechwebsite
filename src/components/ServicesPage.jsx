import React from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import heroContent from "../data/heroContent";
import SplashCursor from "../data/SplashCursor";
import Footer from "../components/Footer";


const ServicesPage = () => {
  return (
    <div >
      <SplashCursor />
      <BackgroundVideo
        title={heroContent.services.title}
        description={heroContent.services.description}
      
      />
      {/* Your service-specific content here */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
