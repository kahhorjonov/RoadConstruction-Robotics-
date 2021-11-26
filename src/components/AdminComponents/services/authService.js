import jwtDecode from "jwt-decode";
import http from "./httpService";
import { apiUrl } from "../utils/config.json";

const tokenKey = "token";
const apiEndpoint = apiUrl + "/login";
console.log(apiUrl);

// http.setJwt(getJwt());

export async function login(username, password) {
  const { data: jwt } = await http.post(apiEndpoint, { username, password });
  localStorage.setItem(tokenKey, jwt.token);
  console.log(jwt);
}

// export function loginWithJwt(jwt) {
//   localStorage.setItem(tokenKey, jwt);
// }

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

export default {
  login,
  logout,
  getCurrentUser,
  // loginWithJwt,
  // getJwt,
};
