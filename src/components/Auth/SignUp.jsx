import LeftImg from "../../assets/Auth/Side.png"
import Google from "../../assets/Auth/Google.png"
import { Link } from "react-router-dom"
import "../Auth/SignUp.css"


const SignUp = () => {
  return (
    <div className="signup">
      <div className="sign-left">
        <img src={LeftImg} alt="" />
      </div>

      <div className="sign-right">
        <div className="sgn-txt">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>

        <div className="sgn-inp">
          <input type="text"  placeholder="Name"/>
          <input type="text" placeholder="Email or Number" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="sgn-btn">
          <button className="acc-btn"> Create Account</button>
          <button className="goog-btn"><img src={Google} alt="" /> Sign up with Google</button>
        </div>

        <div className="sgn-acc">
          <p>Already have account?</p>
          <Link to={"/login"} className="acc-p">Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp