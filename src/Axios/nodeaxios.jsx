import axios from "axios";

const API = axios.create({
    baseURL: "https://f26d-118-179-82-161.ngrok-free.app",
});

export default API;