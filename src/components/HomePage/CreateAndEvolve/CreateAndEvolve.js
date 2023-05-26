import './createAndEvolve.css';
import EvolveCard from './EvolveCard';

import img1 from "../../assests/Create & Evolve/img1.png";
import img2 from "../../assests/Create & Evolve/img20.png";
import img3 from "../../assests/Create & Evolve/img3.png";

import icon1 from "../../assests/Create & Evolve/btn1.png";
import icon2 from "../../assests/Create & Evolve/btn2.png";
import icon3 from "../../assests/Create & Evolve/btn3.png";

const CreateAndEvolve = () => {
    return (
        <div className="createAndEvolve">
            <div class="section-title">
                <h1>
                    Just 3 simple steps to Create and Evolve <br /> your Presence
                </h1>
                <svg width="162" height="15" viewBox="0 0 162 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13.1103C28.3082 6.04231 87 -7.88971 161.5 13.1103" stroke="#FF7A3D" stroke-width="3"/>
                </svg>
            </div>
            <div className="createAndEvolveCard">
                <EvolveCard image={img1} icon={icon1} title="Create your account" desc="Simple password less signup process"/>
                <EvolveCard image={img2} icon={icon2} title="Quickly create a Presence" desc="Evolve your presence to Weave YOUR story"/>
                <EvolveCard image={img3} icon={icon3} title="Promote and Engage" desc="Share your presence globally and attract audience"/>
            </div> 
        </div>
    );
}

export default CreateAndEvolve;