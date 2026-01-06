import "./login.css"
import icon from "../../assets/icons8-google.svg";
import { Link } from 'react-router-dom'
const Login = () => {
    return(
        <>
        <div className="loginbg">
        <h1 className="signin"> SIGN IN</h1>
        <input type="email" placeholder="Enter email / username"className="email"></input>

        <input type="password" placeholder="Enter password"className="password"></input>
        <a className="forgotpass "href="https://www.google.com">forgot password</a>
        <Link to="/Homepage">
        <button className="loginbtn">
           Login
        </button>
        </Link>
        <p className="Donthaveaccount">Dont have an account? <Link to="/Signup" className="createnew" >CREATE NEW</Link></p>
        <p className="or">Or </p>
        <div className="google" >
            <img className="googleimage" src={icon} alt="google image"/>
            <p className="googletext">Continue with Google account</p>
        </div>
        </div>
        </> 
        )
}
export default Login 