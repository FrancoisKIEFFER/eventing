import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/api"
});

function signup(username, password) {
  return auth
    .post("/signup", {
      username,
      password
    })
    .then(response => {
      return response.data;
    });
}
