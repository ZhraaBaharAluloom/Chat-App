import axios from "axios";
import decode from "jwt-decode";

export let user = null;

export function setUser(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("myToken", token);
  user = decode(token);
  return user;
}

export function checkForToken() {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now() / 1000;
    const user = decode(token);
    if (user.exp >= currentTime) {
      setUser(token);
    } else {
      alert("Your session is expired, please try to login again");
    }
  } else {
    alert("Your session is expired, please try to login again");
  }
}
