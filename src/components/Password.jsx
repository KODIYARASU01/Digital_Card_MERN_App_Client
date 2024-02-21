import "./styles/User.scss";
import { Link } from "react-router-dom";

import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Password() {
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
          <Link to="/">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1>Hello , </h1>
          <p className="text-center text-sm">Enter your Account Password</p>
        </div>

        <form action="">
          <div className="profile flex justify-center p-4">
            <img src={avator} alt="avatar" />
          </div>

          <div className="form_group">
            <input
              type="password"
              placeholder="Password"
              id="name"
              name="name"
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/cute-clipart/64/password.png"
              alt="password"
            />
          </div>

          <div className="nameError flex justify-start w-auto"></div>

          <button className="start_btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="register_session">
          <p>
            Forgot Password ? <Link to="/recovery">Recover Now</Link>
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
