import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:3000/api"
});

function signup(user) {
  return auth.post("/signup", user).then(response => {
    return response.data;
  });
}

function login(username, password, vm) {
  return auth
    .post("/login", {
      username,
      password
    })
    .then(response => {
      const { token, username } = response.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("username", username);
      loadUser(vm);
      return response.data;
    });
}

function loadUser(vm) {
  const token = localStorage.jwtToken;
  const username = localStorage.username;
  if (token) {
    axios.defaults.headers.common.Autorization = "Bearer " + token;
    vm.$root.user = {
      token,
      username
    };
  }
}

function logout(vm) {
  localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common.Authorization;
  vm.$root.user = null;
}

export default {
  signup,
  login,
  logout,
  loadUser
};
