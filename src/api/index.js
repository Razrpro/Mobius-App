import axios from "axios";

const ConturConfig = require("../../ConturConfig/ConturConfig.json");
const ENDPOINT = ConturConfig.API;

export const Api = {
    auth: {
        signin: (phone, code) => {
            return axios.post(
                `${ENDPOINT}/api/auth/signin`,
                {
                    phone: phone,
                    code: code,
                }
            );
        },
        login: (phone) => {
            return axios.post(
                `${ENDPOINT}/api/auth/login`,
                {
                    phone: phone,
                }
            );
        },
    },
    users: {
        getExpertList: (start, count, filter) => {
            return axios.post(
                `${ENDPOINT}/api/users/expert?start=${start}&count=${count}`,
                filter
            );
        },
        getUsersList: (start, count, filter) => {
            return axios.post(
                `${ENDPOINT}/api/users?start=${start}&count=${count}`,
                filter
            );
        },
        getMyProfile: () => {
            return axios.get(
                `${ENDPOINT}/api/users/myprofile`
            );
        },
        getUser: (id) => {
            return axios.get(
                `${ENDPOINT}/api/users/user/${id}`
            );
        },
        getQr: () => {
            return axios.get(
                `${ENDPOINT}/api/users/qr`
            );
        },
        updateUser: (params) => {
            return axios.post(
                `${ENDPOINT}/api/users/updateuserdata`,
                params
            );
        }
    },
    shedule: {
        getSheduleList: () => {
            return axios.get(
                `${ENDPOINT}/api/shedule/shedule`
            );
        }
    },
    groups: {
        getGroups: () => {
            return axios.get(
                `${ENDPOINT}/api/group/groups`
            );
        },
    },
    message: {
        getMyMessage: () => {
            return axios.get(
                `${ENDPOINT}/api/message/mymessage`
            );
        }
    },
    news: {
        getNewsList: (start, count) => {
            return axios.get(
                `${ENDPOINT}/api/news/news?start=${start}&count=${count}`
            );
        },
        getNews: (id) => {
            return axios.get(
                `${ENDPOINT}/api/news/more/${id}`
            );
        },
    },
    chat: {
        initPrivateChat: (userId) => {
            return axios.get(
                `${ENDPOINT}/api/chat/initPrivateChat/${userId}`
            );
        }
    }
}
