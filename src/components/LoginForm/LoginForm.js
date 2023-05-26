import "./LoginForm.css";
import Logo from "../assests/googleLogo.png";
import Button from "../UI/Button";
const LoginForm = () => {

    return (
        <div className="form">
            <div id="heading">Login</div>
            <input type="text" placeholder="Phone number, username, or email" />
            <Button className="otpBtn"><snap class="otpBtnTxt">Get OTP</snap>   <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999672 7.33203L11.333 7.33203" stroke="white" stroke-width="2" stroke-linecap="round"/>
                <path d="M5.66634 12.666L11.333 7.33268L5.66634 1.66601" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </Button>
            <div className="divider">
                or
            </div>
            <div className="googleLogin">
                <img src={Logo} alt="" />
                <p>
                    Login With Google
                </p>
            </div>
            <div className="noAccount">
                Don't have a account? <a href="#">  Sign Up</a>
            </div>
        </div>
    )
};
export default LoginForm;