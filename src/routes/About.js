import Navbar from "../components/Navbar";
import First from "../components/First";
import AboutImg from "../assets/about4.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(
        <>
        <Navbar/>
        <First
        cName="first-mid"
        firstImg={AboutImg} 
        title="Discover Our Story"
        
        
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
}

export default About