import Navbar from "../components/Navbar";
import First from "../components/First";
import AboutImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
        <>
        <Navbar/>
        <First
        cName="first-mid"
        firstImg={AboutImg} 
        title="Get in Touch"
        btnClass="hide"
        
        
        
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact