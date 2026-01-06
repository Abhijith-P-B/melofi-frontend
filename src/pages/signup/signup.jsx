import "./signup.css"
import icon from "../../assets/icons8-google.svg"; 
import { Link } from "react-router-dom";
const Signup = () => {
    return (
        <>
            <div className="loginbg">
                <h1 className="Signup"> SIGN UP</h1>
                <input type="username" placeholder="Enter Username" className="email"/>
                <input type="email" placeholder="Enter email" className="email"/>
                <input type="password" placeholder="Enter password" className="password" />
                <Link to="/Homepage">
                    <button className="loginbtn">Register</button>
                </Link>
                <Link to="/Login" className="Alreadyaccnt">Already have an account?</Link>
                <p className="or">Or</p>
                <div className="google">
                    <img className="googleimage" src={icon} alt="google image"/>
                    <p className="googletext">Register with Google account</p>
                </div>
            </div>
        </>
    )
}
export default Signup;