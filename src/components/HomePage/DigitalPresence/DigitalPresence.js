import './digitalPresence.css';
import Button from "../../UI/Button";
import MobileImg from "../../assests/mobile-img.png";

const DigitalPresence = () => {
    return (
        <div className="digitalPresence">
            <div class="phone-img">
                <img className="mobile-img" src={MobileImg} alt="image1" />
            </div>
            <div className='digitalContent'>
                <h1>Weave YOUR Digital Presence</h1>
                <p>Attract and engage with <b>followers & <br/> customers,</b> receive <b>Feedback, Review, <br />  Rating</b> and promote your offerings</p>
                <br />
                <p>Evolve <b>Story, Blog, Tutorial, Photologue...</b> <br /> on your  <b>Interests, Passion, Hobby, <br /> Travels, Expertise...</b></p>
                <Button className="btn">Know More</Button>
            </div>       
        </div> 
    );
}

export default DigitalPresence;