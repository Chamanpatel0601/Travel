import Navbar from "../components/Navbar";
import First from "../components/First";
import AboutImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service(){
    return(
        
        <>
        <Navbar/>
        <First
        cName="first-mid"
        firstImg={AboutImg} 
        title="Explore the World with Us"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
        
        
    )
}

export default Service