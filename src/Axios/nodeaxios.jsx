import axios from "axios";

const API = axios.create({
    baseURL: "https://0cc1-118-179-82-161.ngrok-free.app",
});

export default API;