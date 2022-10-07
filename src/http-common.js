import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:80/api",
    headers: {
        "Content-type": "application/json",
        "Authorization": "Bearer VTrY4aG3fk3P3WFQBgJg4bvGSSNGtNmXRw0MhxCJ",
    }
});