import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
    return localStorage.getItem("auth_Token");
};

// export const removeAuthToken = () => {
//     localStorage.removeItem("auth_Token");
// };

export const setAuthToken = (token) => {
    localStorage.setItem("auth_Token", token);
};

export const request = (method, url, data) => {
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "") 
    {
        headers = {
            Authorization: "Bearer " + getAuthToken()
        };
    }

    {
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    });
    };
};