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
