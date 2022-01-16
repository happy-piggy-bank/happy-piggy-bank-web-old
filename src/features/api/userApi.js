import { loginUri, joinUri } from './apiRouteList';
const axios = require('axios').default;

export const userLoginApi = async ({ userEmail, userPw }) => {
    const result = await axios.post(loginUri, { userEmail, userPw });
    return result.data;
}

export const userJoinApi = async ({ userEmail, userPw, userName }) => {
    const result = await axios.post(joinUri, { userEmail, userPw, userName });
    return result.data;
}