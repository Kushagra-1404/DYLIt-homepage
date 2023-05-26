import classes from "./EvolveCard.module.css";

const EvolveCard=(props)=>{
    return(
        <div className={classes.evolveCard}>
            <img src={props.image} alt="" />
            <div className={classes.icon}>
                <img src={props.icon} alt="" />
            </div>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
};
export default EvolveCard;