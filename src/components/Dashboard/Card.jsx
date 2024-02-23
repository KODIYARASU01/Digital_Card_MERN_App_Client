import { useEffect, useState } from "react";
import website from "/src/assets/website_dev.jpeg";
import avator from "/src/assets/profile.png";
import phone from "/src/assets/phone.gif";
import pic1 from "/src/assets/gallery/1.png";
import pic2 from "/src/assets/gallery/2.png";
import pic3 from "/src/assets/gallery/3.png";
import pic4 from "/src/assets/gallery/4.png";
import axios from "axios";
let gallerys = [pic1, pic2, pic3, pic4];
const Card = ({ serviceMessage, value, setServiceMessage, setValue }) => {
  const [userData, setUserData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [serviceData, setServiceData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const [gallerData, setGalleryData] = useState(null);

  const [error, setError] = useState(null);
  console.log(userData);
  console.log(aboutData);

  //Home data Fetch
  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        // Retrieve token from local storage or wherever it's stored
        const token = localStorage.getItem("token");

        // Make authenticated request with bearer token
        const response = await axios.get(
          "https://digital-card-mern-app-server.onrender.com/api/user/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set user data
        setUserData(response.data);
      } catch (error) {
        // Handle errors
        setError(error.response.data.error);
      }
    };

    fetchUserData();
  }, []);
  //About data fetch
  useEffect(() => {
    // Fetch user data
    const fetchAboutData = async () => {
      try {
        // Retrieve token from local storage or wherever it's stored
        const token = localStorage.getItem("token");

        // Make authenticated request with bearer token
        const response = await axios.get(
          "https://digital-card-mern-app-server.onrender.com/api/user/about/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set user data
        setAboutData(response.data);
      } catch (error) {
        // Handle errors
        setError(error.response.data.error);
      }
    };

    fetchAboutData();
  }, []);
  //Service data fetch
  useEffect(() => {
    // Fetch user data
    const fetchServiceData = async () => {
      try {
        // Retrieve token from local storage or wherever it's stored
        const token = localStorage.getItem("token");

        // Make authenticated request with bearer token
        const response = await axios.get(
          "https://digital-card-mern-app-server.onrender.com/api/user/service/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set user data
        setServiceData(response.data);
      } catch (error) {
        // Handle errors
        setError(error.response.data.error);
      }
    };

    fetchServiceData();
  }, []);

  //Payment data fetch
  useEffect(() => {
    // Fetch user data
    const fetchPaymentData = async () => {
      try {
        // Retrieve token from local storage or wherever it's stored
        const token = localStorage.getItem("token");

        // Make authenticated request with bearer token
        const response = await axios.get(
          "https://digital-card-mern-app-server.onrender.com/api/user/payment/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set user data
        setPaymentData(response.data);
      } catch (error) {
        // Handle errors
        setError(error.response.data.error);
      }
    };

    fetchPaymentData();
  }, []);
  //Payment data fetch
  useEffect(() => {
    // Fetch user data
    const fetchGalleryData = async () => {
      try {
        // Retrieve token from local storage or wherever it's stored
        const token = localStorage.getItem("token");

        // Make authenticated request with bearer token
        const response = await axios.get("http://localhost:3001/upload", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Set user data
        setGalleryData(response.data);
      } catch (error) {
        // Handle errors
        setError(error.response.data.error);
      }
    };

    fetchGalleryData();
  }, []);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="box_right">
        <div className="box_right_title">
          <h4>Live Preview Session</h4>
        </div>

        <div className="digital_card">
          <div className="card_title">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAMAAAAynjhNAAABPlBMVEVHcEz////N2LByfJNmcHeFkatndI7k5umqtL/X4LuRl5zu7++Bvkqlzn6RxGTg4eNUYpGizGWcw2vT46FIVHutuacqMlAsOmLX3zbf4ePm6ZVbYmpudXysr7KKw1VBToU2RoE6SoGkp6vY2NxndZuLo346R3Tv7+/C0bemwWtNVWjT09a+wMR9hIuYnKLCxcm2uLuXm6D19fWbykGLj5Xp6uo4UHHd42NMUV5KZFnb4Evu9GN8vz99wkEuPoB7u0ErPHwqOXLt7e8kOGnd4OPBxcgtO3ez0jKYnKJ9hYx2vDjG2ywjNWGlqq5WYHEmNnmlzDmOxz4lMlYYHzUjLUmztrqExECZyjkdLmfO0dQYKlvY3x1ud32IjpZ+wTojM27m6Orz9PTS09dWbFDb5CO2u76vxTB9jk88XFdShFQ+mpiFAAAAPHRSTlMAAzYx/kt8DRoi/pPwdb/5orqTQrdD7f74jU9wT73V0e/f49dmfOPVYKuZrcmxrdvf4tb23+f5ra/dz4rKPpwOAAABy0lEQVQokXXSaVeqQBjA8XFB0KueXNPS6lSnfbtbd0kcSFNCE0spwoJuknW//xdonmFEMfv7xsPPeQYGEaLxmaVMFH1S9Feh1Rx1U8G5ulQYtFrNZvfuenfOhGBhMGYrnuBnNPB34Iz5VlRXdmZGO87AccYsWjjp2+FsNBwOX0ctxqKoxhOBCe92aK9dlyskNZ7x+DD8AIUj6e+U4QdY9XY4uoQecuTxU1bFXU4cp91nOHqEftDvuZWKRR1jrP4JwaVyTFFiylc2KxFXGYvDPFnPlxVofXwrQhqrjHt7hA+uII/JKSZVwhV80+/zhHVdf9FPpo8igbF1+2b2eyXE719Ax76TTFr4zbjp95YR2r9/Jp8NH6f+G0bb5S91yMfcqSbXgEuEz6HtCQoLmtRwWSD8D/rmvd/ImlZ1ufcbza7mVrVqlXGeLEZFyj/duVkZlLKZp4dafILqHMxt2JLksm1kBbqiSO+8vhjZ3DLkBmN7i2O7Fe+h57Zp1mTGWiPiPccOPbWLxXaNsaQtCFNvQH8hTVha5dB0ZXhjesekrK1tBnyKgjGScglsy9NzWTn4sz122oadDX1AUvQwTOrszUVENuNDy6WPYxF6B4JahHYc/5r1AAAAAElFTkSuQmCC"
              alt="brand"
            />
            <h4 className="text-bold">Let's Build Your Brand..</h4>
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
              alt="external-brand-customer-engagement-flat-flat-geotatah-2"
            />
          </div>
          <div className="card_box">
            {/* //Home page */}

            {userData !== null
              ? userData.map((data, index) => {
                  return (
                    <div className="home" key={index}>
                      <div>
                        <div className="views">
                          <img
                            width="48"
                            height="48"
                            src="https://img.icons8.com/color/48/visible.png"
                            alt="visible"
                          />
                          <p>
                            Views : <span>{data.count}</span>
                          </p>
                        </div>
                        <div className="profile_pic">
                          <img
                            src={data.profileImage || avator}
                            alt=" Profile"
                          />
                        </div>
                        <div className="company_name">
                          <h4>{data.companyName}</h4>
                        </div>
                        <div className="owner_name">
                          <p>
                            {data.authorName}
                            <span>(Propertier)</span>
                          </p>
                        </div>
                        <div className="be_touch">
                          <p>Let's talk and visit us :</p>

                          <div className="actions">
                            <a href={`tel:+91 ${data.mobile} }`}>
                              <img
                                width="64"
                                height="64"
                                src="https://img.icons8.com/arcade/64/call-male.png"
                                alt="call-male"
                              />
                              <p>Call</p>
                            </a>
                            <a
                              href={`https://api.whatsapp.com/send?phone=+91 ${data.whatsUp}&text=Hi%2C%20There!`}
                              target="_blank"
                            >
                              <img
                                width="48"
                                height="48"
                                src="https://img.icons8.com/color/48/whatsapp--v1.png"
                                alt="whatsapp--v1"
                              />
                              <p>WhatsUp</p>
                            </a>
                            <a href={data.location} target="_blank">
                              <img
                                width="64"
                                height="64"
                                src="https://img.icons8.com/arcade/64/south-direction.png"
                                alt="south-direction"
                              />
                              <p>Direction</p>
                            </a>

                            <a href={`mailto:${data.mail}`}>
                              <img
                                width="64"
                                height="64"
                                src="https://img.icons8.com/arcade/64/new-post--v2.png"
                                alt="new-post--v2"
                              />
                              <p>Mail</p>
                            </a>
                          </div>
                        </div>
                        <div className="address_details">
                          <div className="street">
                            <img
                              width="94"
                              height="94"
                              src="https://img.icons8.com/3d-fluency/94/location.png"
                              alt="location"
                            />
                            <p>{data.companyAddress}</p>
                          </div>
                          <div className="mail">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/color/48/filled-message.png"
                              alt="filled-message"
                            />
                            <p>{data.companyEmail}</p>
                          </div>
                          <div className="site">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/fluency/48/domain.png"
                              alt="domain"
                            />
                            <p>{data.websiteLink}</p>
                          </div>
                          <div className="contact">
                            <img
                              width="48"
                              height="48"
                              src="https://img.icons8.com/fluency/48/contact-card.png"
                              alt="contact-card"
                            />
                            <p>{`(+91) ${data.phoneNumber}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : ""}
            {/* About page */}

            {aboutData !== null
              ? aboutData.map((data, index) => {
                  return (
                    <div className="about" key={index}>
                      <div className="about_title">
                        <h4>About Us</h4>
                        <img
                          width="64"
                          height="64"
                          src="https://img.icons8.com/flat-round/64/info.png"
                          alt="info"
                        />
                      </div>
                      <div className="about_content">
                        <div className="company_name">
                          <h6>Company Name </h6>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                            alt="experimental-arrow-pieces"
                          />
                          <p>{data.brandName}</p>
                        </div>
                        <div className="category">
                          <h6>Category </h6>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                            alt="experimental-arrow-pieces"
                          />
                          <p>Category</p>
                        </div>
                        <div className="year">
                          <h6>Year of Est </h6>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                            alt="experimental-arrow-pieces"
                          />
                          <p>{data.yearOfEst}</p>
                        </div>
                        <div className="bussiness">
                          <h6>Nature of Business</h6>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                            alt="experimental-arrow-pieces"
                          />
                          <p>{data.bussiness}</p>
                        </div>
                      </div>
                      <div className="our_specialities">
                        <div className="specialities_title">
                          <h4>Our Specialities</h4>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3.png"
                            alt="external-fundraiser-event-management-flaticons-lineal-color-flat-icons-3"
                          />
                        </div>

                        <div
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.value }}
                        />
                      </div>
                    </div>
                  );
                })
              : ""}
            {/* Product page */}
            <div className="product_services">
              {serviceData !== null
                ? serviceData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="product_title">
                          <h4>Product & Services</h4>
                          <img
                            width="64"
                            height="64"
                            src="https://img.icons8.com/external-flat-geotatah/64/external-brand-customer-engagement-flat-flat-geotatah-2.png"
                            alt="external-brand-customer-engagement-flat-flat-geotatah-2"
                          />
                        </div>
                        <div className="service_1">
                          <div className="service_title">
                            <h4> {data.serviceTitle}</h4>
                            <img
                              width="30"
                              height="30"
                              src="https://img.icons8.com/offices/30/e-learning.png"
                              alt="e-learning"
                            />
                          </div>
                          <div
                            className="service1_content"
                            dangerouslySetInnerHTML={{
                              __html: data.serviceMessage,
                            }}
                          />

                          <div className="service1_image">
                            <img src={data.servicePic} alt="website image" />
                          </div>
                          <div className="service1_actions">
                            <p className="price">Rs : {data.servicePrice}</p>

                            <a href={`to:+91 ${data.serviceEnquiry}`}>
                              <img src={phone} alt="phone" />
                              <p>Enquiry</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            {/* payment page */}
            <div className="payment">
              {paymentData !== null
                ? paymentData.map((data, index) => {
                    return (
                      <div key={index}>
                        <div className="payment_title">
                          <h4>Payment</h4>
                          <img
                            width="16"
                            height="16"
                            src="https://img.icons8.com/office/16/money-bag-euro.png"
                            alt="money-bag-euro"
                          />
                        </div>

                        <div className="container_1">
                          <div className="row_1">
                            <h6>Phone Pay Number</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>+91 {data.phonePayNumber}</p>
                          </div>
                          <div className="row_2">
                            <h6>Google Pay Number</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>+91 {data.gPayNumber}</p>
                          </div>
                        </div>

                        <div className="container_2">
                          <div className="container2_title">
                            <h5>Account Details</h5>
                          </div>
                          <div className="row_1">
                            <h6>Bank Name</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>{data.bankName}</p>
                          </div>
                          <div className="row_2">
                            <h6>IFSC Code</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>{data.IFSC}</p>
                          </div>
                          <div className="row_3">
                            <h6>Customer Name</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>{data.customerName}</p>
                          </div>
                          <div className="row_4">
                            <h6>Account Number</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>{data.accountNumber}</p>
                          </div>
                          <div className="row_5">
                            <h6>Account Type</h6>
                            <img
                              width="64"
                              height="64"
                              src="https://img.icons8.com/pieces/64/experimental-arrow-pieces.png"
                              alt="experimental-arrow-pieces"
                            />
                            <p>{data.AcountType}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            {/* Gallery page */}

            <div className="gallery">
              <div className="gallery_title">
                <h4>Gallery</h4>
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/office/16/ios-photos.png"
                  alt="ios-photos"
                />
              </div>

              <div className="gallery_container">
                <img src={pic1} alt="gallery pick" />;
              </div>
            </div>
            {/* //Feedback page*/}

            <div className="feedback">
              <div className="feedback_title">
                <h4>Feedback</h4>
                <img
                  width="16"
                  height="16"
                  src="https://img.icons8.com/office/16/popular-topic.png"
                  alt="popular-topic"
                />
              </div>
              <div className="feedback_container">
                <div className="feedback_heading">
                  <h5>Give Feedback Something About Us </h5>
                </div>
                <form action="">
                  <div className="form_group">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                      id="name"
                    />
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/nolan/64/user.png"
                      alt="user"
                    />
                  </div>
                  <div className="form_group">
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="4"
                      placeholder="Tell something about us !"
                    ></textarea>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/edit-text-file.png"
                      alt="edit-text-file"
                    />
                  </div>
                  <div className="form_actions">
                    <button type="submit">Send Feedback</button>
                  </div>
                </form>
              </div>
            </div>
            {/* //Enquiry page */}

            <div className="enquiry">
              <div className="enquiry_title">
                <h4>Enquiry Form</h4>
                <img
                  width="64"
                  height="64"
                  src="https://img.icons8.com/nolan/64/questions.png"
                  alt="questions"
                />
              </div>
              <div className="equiry_container">
                <div className="enquiry_heading">
                  <h5> Be in Touch </h5>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/group-background-selected.png"
                    alt="group-background-selected"
                  />
                </div>
                <form action="">
                  <div className="form_group">
                    <input
                      type="text"
                      placeholder="Enter Full Name"
                      name="name"
                      id="name"
                    />
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/nolan/64/user.png"
                      alt="user"
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                    />
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/nolan/64/new-post.png"
                      alt="new-post"
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="tel"
                      placeholder="Enter your mobile Number"
                      name="tel"
                      id="tel"
                    />
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/nolan/64/phone-disconnected.png"
                      alt="phone-disconnected"
                    />
                  </div>
                  <div className="form_group">
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="4"
                      placeholder="Tell something about us !"
                    ></textarea>
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/fluency/48/edit-text-file.png"
                      alt="edit-text-file"
                    />
                  </div>
                  <div className="form_actions">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="copyright">
              <p>Copyright Reserved &copy; 2024 DigitalCard.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
