import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/pokhara.jpg"
import Trip2 from "../assets/phuket.jpg"
import Trip3 from "../assets/holang.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can Discover Unique place using google maps.</p>
            <div className="tripCard">
                <TripData 
                image={Trip1}
                heading= "Trip in Pokhara, Nepal"
                text = "Pokhara, the 'Tourist Capital of Nepal,' is the second-largest city in this Himalayan country, after Kathmandu. At an altitude of more than 900m, it is one of the highest cities, making it the base for many world-famous treks. The highlight of the town is its Lakeside, which is a boating paradise flanked with charming shops, dreamy cafés, restaurants and pubs that make up this postcard-perfect town"
                />

<TripData 
                image={Trip2}
                heading= "Trip in Phuket, Thailand"
                text = "The largest Island in all of Thailand, Phuket has everything Thailand has to offer. It is located in southern Thailand, on the Andaman sea coastline. Serviced by the Phuket International Airport, the island sees no dearth of travellers at any time of the year. Golden beaches, numerous offshore islands, upbeat markets, a high-octane nightlife and thrilling watersports characterise Phuket in a nutshell. It is also one of the fastest-accessible beach destinations in Thailand"
                />

<TripData 
                image={Trip3}
                heading= "Trip in Halong Bay, Vietnam"
                text = "Characterised by towering karst limestone pillars and small islets of various shapes and sizes amidst crystal blue waters, Halong Bay's ethereal beauty is a sight to behold. Located in northern Vietnam, it is the most popular tourist spot this side of the country. Halong Bay, where 'Halong' translates to 'where the dragon descends into the sea', had a part of it designated as a World Heritage Site in 1994. Halong City is the main entry point to the bay."
                
                />
            </div>
        </div>
    );
}

export default Trip;