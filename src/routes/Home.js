
import Navbar from "../components/Navbar";
import First from "../components/First";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import AboutImg from "../assets/home.jpg";

function Home(){
    return(
        <>
        <Navbar/>
        <First
        cName="first"
        firstImg={AboutImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )
}

export default Home