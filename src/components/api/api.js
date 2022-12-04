import axios from "axios"
const API_KEY =  "6474d851-ffee-426e-afc4-40527057d45b"
const ROOT_URL = "https://project-2-api.herokuapp.com"


function getVideos (){
    //axios automaitcally creates a promise 
   return axios.get(`${ROOT_URL}/videos?api_key=${API_KEY}`)
}


function getVideoById (id){
    return axios.get(`${ROOT_URL}/videos/${id}?api_key=${API_KEY}`)
}

//export object
export {getVideos, getVideoById}
