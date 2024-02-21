import "./styles/User.scss";
import { Link } from "react-router-dom";

import avator from "../assets/profile.png";
import company from "../assets/aristostech.jpg";
export default function Profile() {
  return (
    <div className="user_container">
      <div className="user_header">
        <h3 className="text-center">Welcome to Digital Card Creator!</h3>
        <p className="text-center">
          Brand your store easily,share this digital card with anyone to
          showcase your company profile easier.
        </p>
      </div>
      <div className="register_box">
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
          <h1>Profile</h1>
          <p className="text-center text-sm">You can update your details!</p>
        </div>

        <form action="">
          <div className="profile flex justify-center p-4">
            <div className="form_group">
              <label htmlFor="profile">
                <img alt="avatar" id="profile_image" />
              </label>
              <input type="file" id="profile" name="profile" />
            </div>
            <label htmlFor=""></label>
          </div>
          <div className="row_1">
            <div className="form_group">
              <input
                type="text"
                placeholder="firstName"
                id="firstName"
                name="firstName"
              />
              <img
                className="icon"
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/user.png"
                alt="user"
              />
            </div>
            <div className="form_group">
              <input
                type="text"
                placeholder="lastName"
                id="lastName"
                name="lastName"
              />
              <img
                className="icon"
                width="64"
                height="64"
                src="https://img.icons8.com/cotton/64/name--v2.png"
                alt="name--v2"
              />
            </div>
          </div>
          <div className="row_1">
            <div className="form_group">
              <input
                type="tel"
                placeholder="Mobile Number"
                id="mobile"
                name="mobile"
              />
              <img
                className="icon"
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/callback.png"
                alt="callback"
              />
            </div>
            <div className="form_group">
              <input
                type="email"
                placeholder="Eg : abc@gmail.com"
                id="email"
                name="Email"
              />
              <img
                className="icon"
                width="64"
                height="64"
                src="https://img.icons8.com/nolan/64/new-post.png"
                alt="new-post"
              />
            </div>
          </div>

          <div className="form_group">
            <input
              type="text"
              placeholder="Address"
              id="address"
              name="address"
            />
            <img
              className="icon"
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/48/order-delivered.png"
              alt="order-delivered"
            />
          </div>

          <button className="start_btn" type="submit">
            Update
          </button>
        </form>

        <div className="register_session">
          <p>
            Come back later ? <button style={{ color: "red" }}>Log Out</button>
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
