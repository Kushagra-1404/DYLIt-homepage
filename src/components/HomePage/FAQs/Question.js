import classes from "./Question.module.css";
import PlusIcon from "../../assests/plus.png";
import { useState } from "react";

const Question = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    function handleCollapse() {
        setIsExpanded((prevValue) => !prevValue);
    }
    return (
        <div className={classes.question}>
            <div className={classes.quesCard}>
                <p>
                    Lorem ipsum dolor, os, architecto?
                </p>
                <div className={classes.collapseIcon}>
                    <img src={PlusIcon} alt="" onClick={handleCollapse} />
                </div>
            </div>
            <div className={classes.answer} style={{ display: isExpanded ? "block" : "none" }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla illum eaque sunt fugiat. Earum ipsa aut deleniti qui excepturi eum, beatae in neque aliquid suscipit distinctio sapiente facere quae doloremque necessitatibus? Saepe earum reiciendis inventore voluptatum quae fugit accusantium provident, neque velit iure harum accusamus? Debitis eaque veritatis ullam suscipit.
            </div>
            <hr/>
        </div>
    )
};
export default Question;