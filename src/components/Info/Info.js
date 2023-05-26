import classes from "./info.module.css";
const Info = () => {
    const cYear=new Date().getFullYear();
    console.log(cYear);
    return (
        <div className={classes.info}>
            <h2>DyLIT</h2>
            <p>
                Connect with your target audience through
                    <br />
                effective promotions,offers & discounts.
            </p>
            <p>
            &#169; {cYear} DyLIT.info. All Rights Reserved
            </p>
        </div>
    )
};
export default Info;