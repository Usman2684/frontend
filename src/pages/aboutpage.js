import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import AboutSection from "../components/AboutSection";
import AltServicesSection from "../components/AltServicesSection";
import AltServicesSectionTwo from "../components/AltServicesSectionTwo";
import OurTeam from "../components/OurTeam";
import { useState } from "react";

const AboutPage = () => {
  const [active, setActive] = useState("about");
  return (
    <>
      <Navbar activeClass={active} />
      <main id="main">
        {/* <!-- ======= Breadcrumbs ======= --> */}
        <Breadcrumbs pageName="About" />
        {/* <!-- End Breadcrumbs --> */}

        {/* <!-- ======= About Section ======= --> */}
        <AboutSection />
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Alt Services Section ======= --> */}
        <AltServicesSection />
        {/* !-- End Alt Services Section --> */}

        {/* <!-- ======= Alt Services Section 2 ======= --> */}
        <AltServicesSectionTwo />
        {/* <!-- End Alt Services Section 2 --> */}

        {/* <!-- ======= Our Team Section ======= --> */}
        <OurTeam />
        {/* <!-- End Our Team Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <Testimonials />
        {/* <!-- End Testimonials Section --> */}
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
