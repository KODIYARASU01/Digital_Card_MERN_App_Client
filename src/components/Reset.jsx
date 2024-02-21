import "./styles/User.scss";
import { Link } from "react-router-dom";

import company from "../assets/aristostech.jpg";
export default function Reset() {
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
          <Link to="/recovery">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/back.png"
              alt="back"
            />
          </Link>
        </div>
        <div className="box_title">
          <h1>Reset</h1>
          <p className="text-center text-sm">Create your new password!</p>
        </div>

        <form action="" className="pt-20">
          <div className="form_group">
            <img
              className="icon"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/new--v1.png"
              alt="new--v1"
            />
            <input
              type="password"
              placeholder="New Password"
              id="password"
              name="password"
            />
          </div>
          <div className="form_group">
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm_pass"
              name="confirm_pass"
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/password.png"
              alt="password"
            />
          </div>

          <button className="start_btn" type="submit">
            Update Password
          </button>
        </form>

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
