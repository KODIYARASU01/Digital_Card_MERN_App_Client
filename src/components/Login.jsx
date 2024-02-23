import "./styles/User.scss";
import { Link, useNavigate } from "react-router-dom";
import avator from "../assets/LOGO.png";
import company from "../assets/aristostech.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

import svg from "../assets/svg/6.svg";
import Loader from "../components/Loader.jsx";

export default function Login() {
  let navigate = useNavigate();

  let [userName, setUserName] = useState();
  let [password, setpassword] = useState();
  let [loader, setLoader] = useState(false);

  let handleLogin = async (e) => {
    e.preventDefault();

    try {
      let data = { userName, password };
      setLoader(true);
      let result = await axios.post(
        "https://digital-card-mern-app-server.onrender.com/api/login",
        data
      );

      let { token } = result.data;

      console.log(token);
      // Store the token in local storage
      localStorage.setItem("token", token);
      navigate("/admin");
      setUserName("");
      setpassword("");
      setLoader(false);
    } catch (error) {
      console.log("User not login" + error.message);
      setLoader(false);
      navigate("/");
    }
  };

  return (
    <div className="user_container">
      {loader ? <Loader /> : " "}
      <div className="svg">
        <img src={svg} alt="svg" />
      </div>
      <div className="user_header">
        <h3 className="text-center">Welcome to Digital Card Creator!</h3>
        <p className="text-center">
          Brand your store easily,share this digital card with anyone to
          showcase your company profile easier.
        </p>
        <img src="" alt="" />
      </div>
      <div className="user_box">
        <div className="box_title">
          <p className="text-center text-sm">Login</p>
          <div className="login-profile flex justify-center p-4">
            <img src={avator} alt="avatar" />
          </div>
        </div>

        <form action="" onSubmit={handleLogin}>
          <div className="form_group">
            <input
              type="text"
              placeholder="username"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
              type="password"
              placeholder="Password"
              id="name"
              name="name"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <img
              className="icon"
              width="64"
              height="64"
              src="https://img.icons8.com/cute-clipart/64/password.png"
              alt="password"
            />
          </div>

          <button className="start_btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="register_session">
          <p>
            Not a Member ? <Link to="/register">Register Now</Link>
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
