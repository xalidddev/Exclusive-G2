import LeftImg from "../../assets/Elvin/Side.png"
import "../Elvin/Login.css"


const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <img src={LeftImg} alt="" />
      </div>
      <div className="login-right">
        <div className="txt">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
        </div>

        <div className="inp">
          <input type="text" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
        </div>

        <div className="btn">
          <button className="log-btn">Log In</button>
          <p>Forget Password?</p>
        </div>
      </div>
    </div>
  )
}

export default Login