import classes from "./readyBanner.module.css";
import Button from "../../UI/Button";
import Img from "../../assests/Saly-1.png";
const ReadyBanner = () => {
    return (
        <div className={classes.readyBanner}>
            <div className={classes.content}>
                <h1>
                    Are you ready to start your <br />
                    journey with DyLIT
                </h1>
                <div className={classes.controls}>
                    <Button className={classes.btn}>Join as Business</Button>
                    <Button className={classes.btn}>Join as Creator</Button>
                </div>
            </div>
            <div className={classes.image}>
                <img src={Img} alt="" />
            </div>
        </div>
    )
};
export default ReadyBanner;