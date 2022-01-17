import { statsUri, thisYearBankListUri, bankDetailUri, deleteBankUri } from './apiRouteList';
const axios = require('axios').default;

export const bankTotalStatsApi = async () => {
    try {
        const result = await axios.get(statsUri);
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}

export const getThisYearBankListApi = async ({ token, currentPage }) => {
    try {
        const result = await axios.get(`${thisYearBankListUri}?currentPage=${currentPage}`, {
            headers: { token }
        });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}

export const getBankDetailApi = async ({ token, bankId }) => {
    try {
        const result = await axios.get(`${bankDetailUri}/${bankId}`, {
            headers: { token }
        });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}

export const deleteBankEntryApi = async ({ token, bankId }) => {
    try {
        const result = await axios.delete(`${deleteBankUri}/${bankId}`, {
            headers: { token }
        });
        return result.data;
    } catch (err) {
        return err.response.data;
    }
}