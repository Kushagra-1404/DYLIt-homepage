import classes from "./benefit.module.css";
import img1 from "../../assests/BenefitSectionImages/img1.png";
import img2 from "../../assests/BenefitSectionImages/img2.png";
import img3 from "../../assests/BenefitSectionImages/img3.png";
import img4 from "../../assests/BenefitSectionImages/img4.png";
import img5 from "../../assests/BenefitSectionImages/img5.png";
import img6 from "../../assests/BenefitSectionImages/img6.png";


const Benefit = () => {
    return (
        <div className={classes.benefit}>
            <h1>
                Benefits to Creators & Businesses
            </h1>
            {/* <table cellSpacing={50}>
                <tr>
                    <td>
                        <img src={img1} alt="image1" />
                        <p>Unique Digital <br /> Presence</p>
                    </td>
                    <td>
                        <img src={img2} alt="image2" />
                        <p>Market and <br /> Promote</p>
                    </td>
                    <td>
                        <img src={img3} alt="image3" />
                        <p>Attract <br /> Audience</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src={img4} alt="image4" />
                        <p>Engage <br /> Viewers</p>
                    </td>
                    <td>
                        <img src={img5} alt="image5" />
                        <p>Review and <br /> Rate</p>
                    </td>
                    <td>
                        <img src={img6} alt="image6" />
                        <p>Offerings and <br /> Promotion</p>
                    </td>
                </tr>
            </table> */}

            <div className={classes.benefitCard}>
                <div className={classes.row1}>
                    <div>
                        <img src={img1} alt="image1" />
                        <p>Unique Digital <br /> Presence</p>
                    </div>
                    <div>
                        <img src={img2} alt="image2" />
                        <p>Market and <br /> Promote</p>
                    </div>
                    <div>
                        <img src={img3} alt="image3" />
                        <p>Attract <br /> Audience</p>
                    </div>
                </div>
                <div className={classes.row2}>
                    <div>
                        <img src={img4} alt="image4" />
                        <p>Engage <br /> Viewers</p>
                    </div>
                    <div>
                        <img src={img5} alt="image5" />
                        <p>Review and <br /> Rate</p>
                    </div>
                    <div>
                        <img src={img6} alt="image6" />
                        <p>Offerings and <br /> Promotion</p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Benefit