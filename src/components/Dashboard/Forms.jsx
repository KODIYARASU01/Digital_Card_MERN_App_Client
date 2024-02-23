import React, { useEffect, useState } from "react";
import "./Form.scss";
import profile from "/src/assets/profile.png";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  convertGalleryToBase64,
  convertservicePicToBase64,
  convertLogoPicToBase64,
} from "../helper/convert.js";
const Forms = () => {
  let [error, setError] = useState();
  //Profile
  let [count, setCount] = useState(0);
  let [profileImage, setProfileImage] = useState();
  let [companyName, setCompanyName] = useState();
  let [authorName, setAuthorName] = useState();

  //Social Media
  let [mobile, setMobile] = useState();
  let [whatsup, setWhatsup] = useState();
  let [location, setLocation] = useState();
  let [mail, setMail] = useState();
  //Address link
  let [companyAddress, setCompanyAddress] = useState();
  let [companyEmail, setCompanyEmail] = useState();
  let [websiteLink, setWebsiteLink] = useState();
  let [phoneNumber, setPhoneNumber] = useState();

  //About Us:
  let [brandName, setBrandName] = useState();
  let [category, setCategory] = useState();
  let [yearOfEst, setYearOfEst] = useState();
  let [bussiness, setBussiness] = useState();
  let [value, setValue] = useState(""); //textarea

  //Textarea

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image", "video"],
    ],
  };

  //Services :
  let [serviceTitle, setServiceTitle] = useState();
  let [serviceMessage, setServiceMessage] = useState();
  let [servicePic, setServicePic] = useState();
  let [servicePrice, setServicePrice] = useState();
  let [serviceEnquiry, setServiceEnquiry] = useState();

  //Payment:
  let [phonePayNumber, setPhonePayNumber] = useState();
  let [gPayNumber, setGPayNumber] = useState();
  let [bankName, setBankName] = useState();
  let [IFSC, setIFSC] = useState();
  let [customerName, setCustomerName] = useState();
  let [accountNumber, setAccountNumber] = useState();
  let [AcountType, setAccountType] = useState();

  //Gallery :

  let [gallery, setGallery] = useState();

  //Show & Hide Profile:
  //   let [show, setShow] = useState(true);
  let [homeFormShow, setHomeFormShow] = useState(false);
  let [aboutFormShow, setAboutFormShow] = useState(false);
  let [servicesFormShow, setServicesFormShow] = useState(false);
  let [paymentFormShow, setPaymentFormShow] = useState(false);
  let [galleryFormShow, setGalleryFormShow] = useState(false);

  //Home form submit:
  async function handleProfileSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");

      let data = {
        count,
        profileImage,
        companyName,
        authorName,
        mobile,
        whatsup,
        location,
        mail,
        companyAddress,
        companyEmail,
        websiteLink,
        phoneNumber,
      };
      // Make authenticated request with bearer token
      await axios.post(
        "https://digital-card-mern-app-server.onrender.com/api/user/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      count++;
      alert("Form Submited Sucessfully");
    } catch (error) {
      // Handle errors
      setError(error.response.data.error);
      alert("Something Error");
    }
  }
  //About form submit
  async function handleAboutSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");

      let aboutData = {
        brandName,
        category,
        yearOfEst,
        bussiness,
        value,
      };
      // Make authenticated request with bearer token
      await axios.post(
        "https://digital-card-mern-app-server.onrender.com/api/user/about",
        aboutData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Form Submited Sucessfully");
    } catch (error) {
      // Handle errors
      setError(error.response.data.error);
      alert("Something Error" + error.message);
    }
  }
  //service form submit
  async function handleServiceSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");

      let serviceData = {
        serviceTitle,
        servicePic,
        serviceMessage,
        servicePrice,
        serviceEnquiry,
      };
      // Make authenticated request with bearer token
      await axios.post(
        "https://digital-card-mern-app-server.onrender.com/api/user/service",
        serviceData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Form Submited Sucessfully");
    } catch (error) {
      // Handle errors
      setError(error.response.data.error);
      alert("Something Error" + error.message);
    }
  }
  //payment from submit:
  async function handlePaymentSubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");

      let paymentData = {
        phonePayNumber,
        gPayNumber,
        bankName,
        accountNumber,
        customerName,
        AcountType,
        IFSC,
      };
      // Make authenticated request with bearer token
      await axios.post(
        "https://digital-card-mern-app-server.onrender.com/api/user/payment",
        paymentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Payment Form Submited Sucessfully");
    } catch (error) {
      // Handle errors
      setError(error.response.data.error);
      alert("Something Error" + error.message);
    }
  }

  //gallery from submit:
  async function handleGallerySubmit(e) {
    e.preventDefault();
    try {
      // Retrieve token from local storage or wherever it's stored
      const token = localStorage.getItem("token");

      let galleryData = {
        gallery,
      };
      // Make authenticated request with bearer token
      await axios.post("http://localhost:3001/api/user/gallery", galleryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Gallery Form Submited Sucessfully");
    } catch (error) {
      // Handle errors
      setError(error.response.data.error);
      alert("Something Error" + error.message);
    }
  }

  //Formik does not support file upload so we could create handler :
  const UploadLogoPic = async (e) => {
    let base64 = await convertLogoPicToBase64(e.target.files[0]);

    setProfileImage(base64);
  };
  const UploadServicePic = async (e) => {
    let base64 = await convertservicePicToBase64(e.target.files[0]);

    setServicePic(base64);
  };

  const UploadGalleryPic = async (e) => {
    let base64 = await convertGalleryToBase64(e.target.files[0]);

    setGallery(base64);
  };

  return (
    <>
      <div className="box_left">
        <div className="box_left_title">
          <h4>Create Your Digital Card</h4>
        </div>
        <div className="box_left_home_form_session">
          <div
            className="form_title"
            onClick={() => {
              setHomeFormShow(!homeFormShow),
                setGalleryFormShow(false),
                setAboutFormShow(false),
                setServicesFormShow(false),
                setPaymentFormShow(false);
            }}
          >
            <h5>Home Form Session</h5>
            {homeFormShow ? (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/down-squared.png"
                alt="down-squared"
              />
            ) : (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/right-squared.png"
                alt="right-squared"
              />
            )}
          </div>

          <div
            className="home_form"
            id={homeFormShow ? "homeFormShow" : "homeFormHide"}
          >
            <form onSubmit={handleProfileSubmit}>
              <div className="profile_heading">Add Profile</div>
              <div className="form_group">
                <label htmlFor="file" className="upload">
                  <img src={profile} alt="upload" />
                </label>
                <input
                  onChange={UploadLogoPic}
                  type="file"
                  id="file"
                  name="file"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="company">
                  Company Name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  id="company"
                  name="company"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="name">
                  Propertier Name
                </label>
                <input
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="social_media_heading">Add Social Media</div>
              <div className="social_media_input">
                <div className="form_group">
                  <label className="label" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Eg : 8825457794"
                  />
                </div>

                <div className="form_group">
                  <label className="label" htmlFor="whatsup">
                    Whatup Number
                  </label>
                  <input
                    type="number"
                    value={whatsup}
                    onChange={(e) => setWhatsup(e.target.value)}
                    id="whatsup"
                    name="whatsup"
                    placeholder="Eg : 8825457794"
                  />
                </div>
                <div className="form_group">
                  <label className="label" htmlFor="direction">
                    Company Location link
                  </label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    id="direction"
                    name="direction"
                    placeholder="Eg : http ://company location link"
                  />
                </div>
                <div className="form_group">
                  <label className="label" htmlFor="company_mail">
                    Company Mail Address
                  </label>
                  <input
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    type="email"
                    id="company_mail"
                    name="company_mail"
                    placeholder="Eg : abc@gmail.com"
                  />
                </div>
              </div>
              <div className="company_address_heading">Add Company Address</div>

              <div className="form_group">
                <label className="label" htmlFor="company_loction">
                  Company Location
                </label>
                <input
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  type="text"
                  id="company_loction"
                  name="company_loction"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="company_email">
                  Company Email ID
                </label>
                <input
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  type="email"
                  id="company_email"
                  name="company_email"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="company_website">
                  Company Website Link
                </label>
                <input
                  value={websiteLink}
                  onChange={(e) => setWebsiteLink(e.target.value)}
                  type="text"
                  id="company_website"
                  name="company_website"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="company_number">
                  Company Phone Number
                </label>
                <input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  id="company_number"
                  name="company_number"
                />
              </div>
              <div className="form_submit">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div className="box_left_about_form_session">
          <div
            className="form_title"
            onClick={() => {
              setAboutFormShow(!aboutFormShow),
                setGalleryFormShow(false),
                setHomeFormShow(false),
                setServicesFormShow(false),
                setPaymentFormShow(false);
            }}
          >
            <h5>About Form Session</h5>
            {aboutFormShow ? (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/down-squared.png"
                alt="down-squared"
              />
            ) : (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/right-squared.png"
                alt="right-squared"
              />
            )}
          </div>

          <div
            className="home_form"
            id={aboutFormShow ? "aboutFormShow" : "aboutFormHide"}
          >
            <form onSubmit={handleAboutSubmit}>
              <div className="profile_heading">About Us</div>
              <div className="form_group">
                <label className="label" htmlFor="brandName">
                  Company Name
                </label>
                <input
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  type="text"
                  id="brandName"
                  name="brandName"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="category">
                  Category
                </label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Eg:Information Technology"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="year">
                  Year Of Estimated
                </label>
                <input
                  value={yearOfEst}
                  onChange={(e) => setYearOfEst(e.target.value)}
                  type="text"
                  id="year"
                  name="year"
                  placeholder="Eg:2024"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="bussiness">
                  Nature Of Bussiness
                </label>
                <input
                  value={bussiness}
                  onChange={(e) => setBussiness(e.target.value)}
                  type="text"
                  id="bussiness"
                  name="bussiness"
                  placeholder="Eg:Pipes,cement Sheets,steel,etc.."
                />
              </div>
              <div className="company_address_heading">Our Specialities</div>

              <ReactQuill
                theme="snow"
                value={value}
                onChange={setValue}
                className="text_editor"
                modules={modules}
              />

              <div className="form_submit">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div className="box_left_service_form_session">
          <div
            className="form_title"
            onClick={() => {
              setServicesFormShow(!servicesFormShow),
                setGalleryFormShow(false),
                setHomeFormShow(false),
                setAboutFormShow(false),
                setPaymentFormShow(false);
            }}
          >
            <h5>Product & Services Session</h5>
            {servicesFormShow ? (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/down-squared.png"
                alt="down-squared"
              />
            ) : (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/right-squared.png"
                alt="right-squared"
              />
            )}
          </div>

          <div
            className="home_form"
            id={servicesFormShow ? "serviceFormShow" : "serviceFormHide"}
          >
            <form onSubmit={handleServiceSubmit}>
              <div className="profile_heading">Our Services</div>
              <div className="form_group">
                <label className="label" htmlFor="service">
                  Service Heading
                </label>
                <input
                  value={serviceTitle}
                  onChange={(e) => setServiceTitle(e.target.value)}
                  type="text"
                  id="service"
                  name="service"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="message">
                  Tell Something about this services
                </label>
                <ReactQuill
                  theme="snow"
                  value={serviceMessage}
                  onChange={setServiceMessage}
                  className="text_editor"
                  modules={modules}
                />
              </div>
              <div className="form_group">
                <label htmlFor="pic">Upload Service Picture</label>
                <label htmlFor="file" className="upload">
                  <img src={servicePic || profile} alt="upload" />
                </label>
                <input
                  onChange={UploadServicePic}
                  type="file"
                  id="pic"
                  name="pic"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="price">
                  Price for this Services
                </label>
                <input
                  value={servicePrice}
                  onChange={(e) => setServicePrice(e.target.value)}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Eg: 3000"
                />
              </div>
              <div className="form_group">
                <label className="label" htmlFor="enquiry">
                  For Get More Detail
                </label>
                <input
                  value={serviceEnquiry}
                  onChange={(e) => setServiceEnquiry(e.target.value)}
                  type="number"
                  id="enquiry"
                  name="enquiry"
                  placeholder="Eg: 8825457794"
                />
              </div>

              <div className="form_submit">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div className="box_left_payment_form_session">
          <div
            className="form_title"
            onClick={() => {
              setPaymentFormShow(!paymentFormShow),
                setGalleryFormShow(false),
                setHomeFormShow(false),
                setAboutFormShow(false),
                setServicesFormShow(false);
            }}
          >
            <h5>Payment Form Session</h5>
            {paymentFormShow ? (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/down-squared.png"
                alt="down-squared"
              />
            ) : (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/right-squared.png"
                alt="right-squared"
              />
            )}
          </div>

          <div
            className="payment_form"
            id={paymentFormShow ? "paymentFormShow" : "paymentFormHide"}
          >
            <form onSubmit={handlePaymentSubmit}>
              <div className="profile_heading">Add Payment Details</div>
              <div className="social_media_input">
                <div className="form_group">
                  <label className="label" htmlFor="phonepay">
                    Phone Pay Number
                  </label>
                  <input
                    type="number"
                    id="phonepay"
                    name="phonepay"
                    placeholder="Eg : +91 8825457794"
                    value={phonePayNumber}
                    onChange={(e) => setPhonePayNumber(e.target.value)}
                  />
                </div>

                <div className="form_group">
                  <label className="label" htmlFor="gpay">
                    Google Pay Number
                  </label>
                  <input
                    type="number"
                    id="gpay"
                    name="gpay"
                    placeholder="Eg : +91 8825457794"
                    value={gPayNumber}
                    onChange={(e) => setGPayNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="profile_heading">Add Bank Details</div>
              <div className="social_media_input">
                <div className="form_group">
                  <label className="label" htmlFor="bankName">
                    Bank Name
                  </label>
                  <input
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    type="text"
                    id="bankName"
                    name="bankName"
                    placeholder="Eg : State Bank Of India"
                  />
                </div>

                <div className="form_group">
                  <label className="label" htmlFor="ifsc">
                    IFSC Code
                  </label>
                  <input
                    value={IFSC}
                    onChange={(e) => setIFSC(e.target.value)}
                    type="text"
                    id="ifsc"
                    name="ifsc"
                  />
                </div>
                <div className="form_group">
                  <label className="label" htmlFor="customerName">
                    Customer Name
                  </label>
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    type="text"
                    id="customerName"
                    name="customerName"
                  />
                </div>
                <div className="form_group">
                  <label className="label" htmlFor="accountNumber">
                    Account Number
                  </label>
                  <input
                    type="number"
                    id="accountNumber"
                    name="accountNumber"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <label className="label" htmlFor="accountType">
                    Account Type
                  </label>
                  <input
                    value={AcountType}
                    onChange={(e) => setAccountType(e.target.value)}
                    type="text"
                    id="accountType"
                    name="accountType"
                    placeholder="Eg : Savings , Current"
                  />
                </div>
              </div>
              <div className="form_submit">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div className="box_left_gallery_form_session">
          <div
            className="form_title"
            onClick={() => {
              setGalleryFormShow(!galleryFormShow);
              setServicesFormShow(false),
                setHomeFormShow(false),
                setAboutFormShow(false),
                setPaymentFormShow(false);
            }}
          >
            <h5>Gallery Form Session</h5>
            {galleryFormShow ? (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/down-squared.png"
                alt="down-squared"
              />
            ) : (
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/arcade/64/right-squared.png"
                alt="right-squared"
              />
            )}
          </div>

          <div
            className="home_form"
            id={galleryFormShow ? "galleryFormShow" : "galleryFormHide"}
          >
            <form onSubmit={handleGallerySubmit}>
              <div className="profile_heading">Create Your Gallery</div>
              <div className="form_group">
                <label htmlFor="pic">Choose Your Picture</label>
                <label htmlFor="file" className="upload">
                  <img src={profile} alt="upload" />
                </label>
                <input
                  onChange={UploadGalleryPic}
                  accept="image/*"
                  type="file"
                  id="gallery"
                  name="gallery"
                />
              </div>
              <div className="form_submit">
                <button type="submit">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;
