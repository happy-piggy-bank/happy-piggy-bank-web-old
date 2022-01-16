import { loginUri } from './apiRouteList';
const axios = require('axios').default;

export const userLoginApi = async ({ userEmail, userPw }) => {
    const result = await axios.post(loginUri, { userEmail, userPw });
    return result.data;
}