import { statsUri, thisYearBankListUri, bankDetailUri, newBankUri, deleteBankUri } from './apiRouteList';
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

export const createBankApi = async ({ token, bankTitle, bankContents, bankAmount, file }) => {
    let form = new FormData();
    form.append('bankTitle', bankTitle);
    form.append('bankContents', bankContents);
    form.append('bankAmount', bankAmount);
    form.append('file', file);

    try {
        const result = await axios.post(newBankUri, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
                token
            }
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