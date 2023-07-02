import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const register_user = async (user) => {
  try {
    let response = await axios.post(`${BASE_URL}/api/auth/register/`, {
      data: user,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// VALIDATES USER DETAILS
export const validateUserDetails = (user) => {
  let error = { isError: false };
  if (!user.password || user.password != user.confirm_password)
    error = { ...error, password: "password doesn't match", isError: true };

  if (!user.name || user.name == "" || user.name == " ")
    error = { ...error, name: "Field is empty", isError: true };

  if (!user.phone || user.phone.length != 10)
    error = { ...error, phone: "Invalid phone number" };

  if (
    !user.email ||
    !user.email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )
    error = { ...error, email: "Provide a valid email id", isError: true };

  if (!user.address || user.address == "")
    error = { ...error, address: "Field is empty", isError: true };

  return error;
};