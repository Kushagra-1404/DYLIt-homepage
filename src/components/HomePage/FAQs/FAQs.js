
import classes from "./faqs.module.css";
import Question from "./Question";
const FAQs = () => {
    return (
        <div className={classes.faqSection}>
            <p>
                Frequently Asked Questions
            </p>
            <h1>Helping brands succeed</h1>
            <div className={classes.accordion}>
                <div className={classes.col1}>
                    <Question />
                    <Question />
                    <Question />
                </div>
                <div className={classes.col2}>
                    <Question />
                    <Question />
                    <Question />
                </div>
            </div>
        </div>
    )
};
export default FAQs;