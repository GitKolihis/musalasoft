import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:5000/api/vi/musalasoft",
    headers: {
        "Content-type" : "application/json"
    }
})