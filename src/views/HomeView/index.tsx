import Footer from "@/components/layout/Footer";
import AboutHome from "@/components/layout/Home/about";
import Faq from "@/components/layout/Home/freequently";
import Jumbotron from "@/components/layout/Home/jumbotron";
import ServiceHome from "@/components/layout/Home/service";
import ChoseHome from "@/components/layout/Home/chose";

const HomeView = () => {
  return (
    <div>
      <Jumbotron />
      <AboutHome />
      <ServiceHome />
      <ChoseHome />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomeView;
