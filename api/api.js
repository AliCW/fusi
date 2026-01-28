import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:10000/"
});

export const getThumbnails = () => {
    return api
        .get("http://localhost:10000/api/images/thumbnails")
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const getArtist = (artist) => {
    return api
        .get(`http://localhost:10000/api/images/${artist}`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const getArtistInfo = (artist) => {
    return api
        .get(`http://localhost:10000/api/artists/${artist}/bio`)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

export const sendEmail = (email) => {
    return api
        .post("http://localhost:10000/api/email/post_email", email)
        .then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
};

//development URL - https://fusion-gallery-development.onrender.com\
//local test URL - http://localhost:10000\