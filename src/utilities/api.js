import axios from "axios";

export async function signUp(user) {
  try {
    console.log(user);
    const res = await axios.post("http://127.0.0.1:8000/api/register/", user);
    return res.data;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
}

export async function signIn(user) {
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/login/", user);

    // If the response contains a token, save it to the local storage
    if (res.data.access && res.data.refresh) {
      localStorage.setItem("accessToken", res.data.access);
      localStorage.setItem("refreshToken", res.data.refresh);
      console.log("Login successful!");
    }

    return res.data;
  } catch (error) {
    // If the response does not contain a token, log an error and throw an exception
    if (error.response && error.response.data) {
      // console.log("Login failed:", error.response.data);
      throw new Error(error.response.data.detail || "Login failed");
    }
    // For network errors, timeout errors, etc., re-throw the error
    throw error;
  }
}
