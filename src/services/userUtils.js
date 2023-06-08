import axios from "axios";
import decode from "jwt-decode";

export function setUser(token) {
  // let receivedToken;
  // let receivedUser;
  // [...args].map((arg) => {
  //   arg.token ? (receivedToken = arg.token) : (receivedUser = arg.user);
  // });
  // axios.defaults.headers.common.Authorization = `Bearer ${receivedToken}`;
  // localStorage.setItem("myToken", receivedToken);
  // receivedUser = decode(receivedToken);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem("myToken", token);
}
