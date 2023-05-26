import "./features.css";
import img1 from "../../assests/FeatureSectionImages/img1.png";
import img2 from "../../assests/FeatureSectionImages/img2.png";
import img3 from "../../assests/FeatureSectionImages/img3.png";
import img4 from "../../assests/FeatureSectionImages/img4.png";
import img5 from "../../assests/FeatureSectionImages/img5.png";
import img6 from "../../assests/FeatureSectionImages/img6.png";
import img7 from "../../assests/FeatureSectionImages/img7.png";


const Features=()=>{
    return(
        <div className="features">
            <p className="title">Features</p>
            <h1>
                Whats in it for me?
            </h1>
            <p className="title-desc" >
                Holistic, Curated and Structured Digital Presence of Businesses and Creators. Simple <br /> public ratings, opinions and reviews. Relevant business information, offerings and <br /> promotions, Meaningful, public and trending Content.
            </p>
            <h2>For Businesses</h2>
            <table cellSpacing={50}>
                <tr>
                    <td>
                        <img src={img1} alt="image1" />
                        <p class="card-title">Attract and <br /> Engage</p>
                        <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    </td>
                    <td>
                        <img src={img2} alt="image2" />
                        <p class="card-title">Market and <br /> Promote</p>
                        <p class="card-desc">Promote YOUR Unique Holistic DyLIT Business Presence or latest updates on that presence on external platforms</p>
                    </td>
                    <td>
                        <img src={img3} alt="image3" />
                        <p class="card-title">Unique Digital <br /> Presence</p>
                        <p class="card-desc">Manage and Evolve a Contextual, Structured Digital Presence YOUR way - using your information on existing platforms as well as creating new content periodically.</p>
                    </td>
                </tr>
            </table>
            <h2>For Creators</h2>
            <table>
                <tr>
                    <td>
                        <img src={img4} alt="image4" />
                        <p class="card-title">Advanced insights</p>
                        <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </td>
                    <td>
                        <img src={img5} alt="image5" />
                        <p class="card-title">Advanced insights</p>
                        <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </td>
                    <td>
                        <img src={img6} alt="image6" />
                        <p class="card-title">Own E-comm store</p>
                        <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </td>
                    <td>
                        <img src={img7} alt="image7" />
                        <p class="card-title">Host Live Events</p>
                        <p class="card-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </td>
                </tr>
            </table>
        </div>

    )
};
export default Features;