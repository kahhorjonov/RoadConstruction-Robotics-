import axios from "axios";

const apiEndpoint =
  "http://yolproject.herokuapp.com/api/admin/createadmin?role=Admin";

export async function register(user) {
  const data = await axios.post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    username: user.username,
    password: user.password,
    region: user.region,
    role: user.role,
  });
  window.location = "/";
}
