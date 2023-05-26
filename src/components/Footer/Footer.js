import classes from "./footer.module.css";
import Legal from "../Links/Legal";
import FollowUsOn from "../Links/FollowUsOn";
import AboutUs from "../Links/AboutUs";
import Info from "../Info/Info";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Info />
            <AboutUs/>
            <Legal/>
            <FollowUsOn/>
        </div>
    )
};
export default Footer;