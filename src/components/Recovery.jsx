import "./styles/User.scss";
import { Link } from "react-router-dom";
import company from "../assets/aristostech.jpg";
export default function Recovery() {
  return (
    <div className="user_container">
      <div className="user_header">
        <h3 className="text-center">Welcome to Digital Card Creator!</h3>
        <p className="text-center">
          Brand your store easily,share this digital card with anyone to
          showcase your company profile easier.
        </p>
      </div>
      <div className="user_box">
        <div className="back_btn">
          <Link to="/password">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1>Recovery</h1>
          <p className="text-center text-sm">Enter OTP to recover pasword</p>
        </div>

        <form action="">
          <div className="profile flex justify-center pt-20">
            <span className="py-4 text-sm text-left text-gray-500">
              Enter 6 digit OTP sent to your email address
            </span>
          </div>

          <div className="form_group">
            <input type="password" placeholder="OTP" id="otp" name="otp" />
            <img
              className="icon"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/one-time-password.png"
              alt="one-time-password"
            />
          </div>

          <button className="start_btn" type="submit">
            Recover
          </button>
        </form>

        <div className="register_session">
          <p>
            Can't get OTP ?{" "}
            <button style={{ color: "royalblue" }} to="/recovery">
              Resend
            </button>
          </p>
        </div>

        <div className="showcase">
          <p>Explore Our Site & Contact Us</p>

          <div className="actions">
            <Link to="/">
              <img src={company} alt="company" />
            </Link>
            <Link to="/">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                alt="whatsapp--v1"
              />
            </Link>
            <Link to="/">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
