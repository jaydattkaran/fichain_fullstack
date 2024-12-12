import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://fichain-backend.onrender.com/", 
    withCredentials:true,
    
});

export default newRequest;