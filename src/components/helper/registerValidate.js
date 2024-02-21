import toast from "react-hot-toast";
import { authenticate } from "./helper.js";
//Validate register form :
export async function registerValidate(values) {
  const errors = userNameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);
}

//Validate userName
function userNameVerify(error = {}, values) {
  if (!values.userName) {
    error.userName = toast.error("userName can't be empty");
  } else if (values.userName.includes(" ")) {
    error.userName = toast.error("Invalid userName!");
  }

  return error;
}
//Validate password :

function passwordVerify(error = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (!values.password) {
    error.password = toast.error("Password can't be empty");
  } else if (values.password.includes(" ")) {
    error.password = toast.error("Wrong Password..!");
  } else if (values.password.length < 4) {
    error.password = toast.error("Password must be more than  4 digits");
  } else if (!specialChars.test(values.password)) {
    error.password = toast.error("Password must have special character");
  }

  return error;
}

//Validate Email :
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("Email can't be empty");
  } else if (values.email.includes(" ")) {
    error.email = toast.error("Wrong Email .... ");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
}
