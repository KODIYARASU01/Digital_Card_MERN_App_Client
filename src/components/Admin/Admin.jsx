import "./Admin.scss";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Navbar from "../Dashboard/Navbar";
import Forms from "../Dashboard/Forms";
import Card from "../Dashboard/Card";

const Admin = () => {
  let [serviceMessage, setServiceMessage] = useState();
  let [value, setValue] = useState("");
  // let navigate = useNavigate();
  // let [token, setToken] = useState(null);
  // const [userData, setUserData] = useState(null);
  // const [error, setError] = useState(null);
  // let [companyName, setCompanyName] = useState();
  // console.log(userData);
  // useEffect(() => {
  //   // Fetch user data
  //   const fetchUserData = async () => {
  //     try {
  //       // Retrieve token from local storage or wherever it's stored
  //       const token = localStorage.getItem("token");

  //       // Make authenticated request with bearer token
  //       const response = await axios.get("http://localhost:3001/api/user/", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       // Set user data
  //       setUserData(response.data);
  //     } catch (error) {
  //       // Handle errors
  //       setError(error.response.data.error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  // async function handleForm(e) {
  //   e.preventDefault();
  //   try {
  //     // Retrieve token from local storage or wherever it's stored
  //     const token = localStorage.getItem("token");

  //     let data = { companyName };
  //     // Make authenticated request with bearer token
  //     await axios.post("http://localhost:3001/api/user/", data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   } catch (error) {
  //     // Handle errors
  //     setError(error.response.data.error);
  //   }
  // }

  // const handleLogout = () => {
  //   // Remove token from local storage and reset state
  //   localStorage.removeItem("token");
  //   setToken("");
  //   navigate("/");
  // };

  return (
    <>
      <div className="admin_container">
        <Navbar />
        <div className="container_box">
          <Forms />
          <Card
            serviceMessage={serviceMessage}
            setServiceMessage={setServiceMessage}
            value={value}
            setValue={setValue}
          />
        </div>
      </div>
    </>
  );
};

export default Admin;
