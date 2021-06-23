import React from "react";

import BriefIntro from "./briefIntro";
import BestTechniques from "./Section/BestTechniques";
import DetialOfQuestions from "./detailOfQuestions";
import MockExam from "./Section/MockExam";
import ContactUsSection from "./ContactUsSection";
import Footer from "../../Components/Footer";
import HeroSection from "./HeroSection";
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <BriefIntro />
      <BestTechniques />
      <DetialOfQuestions />
      <MockExam />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
