import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing';
import ContactUs from '../components/ContactUs';
import Blogs from '../components/Blogs';

const Home = () => (
    <>
        <Navbar />
        <HomePage />
        <About />
        <Services />
        <Projects />
        <Pricing />
        <ContactUs />
        <Blogs />
    </>
);

export default Home;
