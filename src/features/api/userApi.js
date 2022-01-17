import { loginUri, joinUri, logoutUri } from './apiRouteList';
const axios = require('axios').default;

export const userLoginApi = async ({ userEmail, userPw }) => {
    try {
        const result = await axios.post(loginUri, { userEmail, userPw });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}

export const userJoinApi = async ({ userEmail, userPw, userName }) => {
    try {
        const result = await axios.post(joinUri, { userEmail, userPw, userName });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}

export const userLogoutApi = async ({ token }) => {
    try {
        const result = await axios.post(logoutUri, null, {
            headers: { token }
        });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}