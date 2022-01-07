const rootUri = process.env.REACT_APP_API_URI;

const loginUri = rootUri + '/users/login';
const joinUri = rootUri + '/users/join';
const logoutUri = rootUri + '/users/logout';
const myInfoUri = rootUri + '/users/myInfo';
const leaveUri = rootUri + '/users/leave';

const statsUri = rootUri + '/bank/total-stats';
const newBankUri = rootUri + '/bank/new';
const deleteBankUri = rootUri + '/bank/remove';
const thisYearBankListUri = rootUri + '/bank/this-year';
const oldBankListUri = rootUri + '/bank/old-list';
const yearListUri = rootUri + '/bank/year-list';
const bankDetailUri = rootUri + '/bank/detail';

module.exports = {
    loginUri,
    joinUri,
    logoutUri,
    myInfoUri,
    leaveUri,
    statsUri,
    newBankUri,
    deleteBankUri,
    thisYearBankListUri,
    oldBankListUri,
    yearListUri,
    bankDetailUri
};