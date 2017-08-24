import axios from "axios";

const server = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

function signup(user) {
  return server.post("/signup", user).then(response => {
    return response.data;
  });
}

function login(username, password, vm) {
  return server
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
    axios.defaults.headers.common.Authorization = "Bearer " + token;
    vm.$root.user = {
      token,
      username
    };
  }
}

function logout(vm) {
  localStorage.removeItem("jwtToken");
  delete axios.defaults.headers.common.authorization;
  vm.$root.user = null;
}

function getEvent(eventId) {
  return server.get(`/events/${eventId}`).then(response => response.data);
}

function getItem(itemId) {
  return server.get(`/items/${itemId}`).then(response => response.data);
}

function getItemsOfEvent(eventId) {
  return server.get(`/events/${eventId}/items`).then(response => response.data);
}

function postEvent(body) {
  console.log("postEvent");
  return server.post(`/events`, body).then(response => response.data);
}

function postItem(body) {
  return server.post(`/items`, body).then(response => response.data);
}

export default {
  signup,
  login,
  logout,
  loadUser,
  getEvent,
  getItem,
  getItemsOfEvent,
  postEvent,
  postItem
  // getUser
};
