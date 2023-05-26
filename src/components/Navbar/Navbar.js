import classes from "./navbar.module.css";
import Button from "../UI/Button";
const Navbar=(props)=>{

    function handleSignUp(e){
        e.preventDefault();
        console.log("signup");
    }
    return(
        <div className={classes.navbar}>
            <div className={classes.logo}>
                DyLit
            </div>
            <div className={classes.navContainer}>
                <a href="#"><div className={classes.navs}>About Us</div></a>
                <a href="#"><div className={classes.navs}>How it Works</div></a>
                <a href="#"><div className={classes.navs}>Contact Us</div></a>
                
                <Button onClick={handleSignUp} className={classes.signUpBtn}>SignUp</Button>
            </div>
        </div>
    )
};

export default Navbar;