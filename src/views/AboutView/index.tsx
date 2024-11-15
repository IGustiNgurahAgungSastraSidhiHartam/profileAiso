import React from "react";
import JumbotronAbout from "@/components/layout/About/jumbotront";
import AboutAbout from "@/components/layout/About/about";
import AisoAbout from "@/components/layout/About/aiso";
import AissoAbout from "@/components/layout/About/aisso";
import Footer from "@/components/layout/Footer";
const AboutView = () => {
  return (
    <div>
      <JumbotronAbout />
      <AisoAbout />
      <AboutAbout />
      <AissoAbout />
      <Footer />
    </div>
  );
};

export default AboutView;
