import Mountain1 from "../assets/taj1.jpg"
import Mountain2 from "../assets/taj2.jpg"
import Mountain3 from "../assets/leh1.jpg"
import Mountain4 from "../assets/leh2.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
const Destination = () =>{
    return(

        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours Gives You The Opportunity to see a lot, 
                within a frame.
            </p>

           <DestinationData 
            className="first-des"
            heading="Taz Mahal, Agra"

            text="One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. Constructed entirely out of white marble in the 17th century, Taj Mahal is one of the most beautiful monuments in the world. Every year visitors numbering more than the entire population of Agra pass through the magnificent gates to catch a glimpse of this breathtaking monument"
            img1={Mountain1}
            img2={Mountain2}
           />

            <DestinationData 
                className="first-des-reverse"
                heading="Leh Ladakh Tourism"

                text="Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.Ladakh is an adventure playground for rafting and high-altitude trekking. Note that Leh Ladakh is inaccessible by road outside the summer months. The route passes close altogether from around October to May, and the only way to reach is by air. Chadar trek on frozen Zanskar river takes place in January to the end of February"
                img1={Mountain3}
                img2={Mountain4}
           />

        
        </div>

    );
};

export default Destination