import classes from "./followUsOn.module.css";

import { Instagram } from "../assests/SVG/svg";
import { Facebook } from "../assests/SVG/svg";
import { Twitter } from "../assests/SVG/svg";
import { Youtube } from "../assests/SVG/svg";
import { LinkedIn } from "../assests/SVG/svg";

const FollowUsOn = () => {
    return (
        <div className={classes.links}>
            <h4>FOLLOW US ON</h4>
            <div className={classes.iconLinks}>
                <a href="www.facebook.com">
                    <Facebook />
                </a>
                <a href="www.twitter.com">
                    <Twitter />
                </a>
                <a href="www.instagram.com">
                    <Instagram />
                </a>
                <a href="www.linkedin.com">
                    <LinkedIn />
                </a>
                <a href="www.youtube.com">
                    <Youtube />
                </a>
            </div>
        </div>
    )
};
export default FollowUsOn;