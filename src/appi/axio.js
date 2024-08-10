import axios from "axios"
const apiInstance = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers: {
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${localStorage.getItem("token")}`
    },
    timeout: 10000
})

export default apiInstance