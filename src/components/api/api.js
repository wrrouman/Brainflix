import axios from "axios";
const API_KEY = "6474d851-ffee-426e-afc4-40527057d45b";
const ROOT_URL = "http://localhost:8080";
const staticImages = "http://localhost:8080/images/";

function getVideos() {
  //axios automaitcally creates a promise
  return axios.get(`${ROOT_URL}/videos`);
}

function getVideoById(id) {
  return axios.get(`${ROOT_URL}/videos/${id}`);
}

// postVideos is going to be called inside Upload.js in a helper function 
// that helper function, is gonna have an object with some data in it, that came from the form
// {title: "movie", description: "wow so cool"}
function postVideos (newMovieData) {
    return axios.post(`${ROOT_URL}/videos/upload`, newMovieData); 
}


//export object
export { getVideos, getVideoById, staticImages, postVideos };


