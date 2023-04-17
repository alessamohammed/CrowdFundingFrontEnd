import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
    let token = localStorage.getItem("auth_Token");
    if (token === null || token === "") {
        return null;
    }
    const parseJwt = (token) => {        
        const decode = JSON.parse(atob(token.split('.')[1]));
        if (decode.exp * 1000 < new Date().getTime()) {
            logoutAction();
            console.log('Time Expired');
        }
    };
    parseJwt(token);
    return localStorage.getItem("auth_Token");
};

export const logoutAction = () => {
    localStorage.removeItem("auth_Token");
    window.location.href = "/";
};

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