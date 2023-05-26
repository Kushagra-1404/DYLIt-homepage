import "./Intro.css";
import LoginForm from "../../LoginForm/LoginForm";
import FollowersImg from "../../assests/followers-img.png";

const Intro = () => {

    return (
        <div className="introSection">
            <div className="intro">
                <div className="heading">
                    Enabling YOU to
                    Engage
                </div>
                <div className="description">
                    with <b>CONTENT CREATORS</b> and <b>BUSINESSES</b> and benefit from their <b>CURATED CONTENT</b> & <b>OFFERINGS</b>
                </div>
                <img className="followers" src={FollowersImg} alt="followers-img" />
            </div>
            <div class="arrow-svg"><svg style={{marginRight:"4rem"}} width="127" height="82" viewBox="0 0 127 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8808 79.221C24.1841 55.397 59.6424 9.76871 119.049 17.8474" stroke="#FF7A3D" stroke-width="4" stroke-linecap="round"/>
            <path d="M102.632 3.72413L119.388 17.8816L102.978 33.9881" stroke="#FF7A3D" stroke-width="4" stroke-linecap="round"/>
            </svg></div>

            <LoginForm />
        </div>
    )
};
export default Intro; 