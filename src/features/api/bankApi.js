import { statsUri, thisYearBankListUri } from './apiRouteList';
const axios = require('axios').default;

export const bankTotalStatsApi = async () => {
    const result = await axios.get(statsUri);
    return result.data;
}

export const getThisYearBankListApi = async ({ token, currentPage }) => {
    const result = await axios.get(`${thisYearBankListUri}?currentPage=${currentPage}`, {
        headers: { token }
    });
    return result.data;
}