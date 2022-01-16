import { statsUri } from './apiRouteList';
const axios = require('axios').default;

export const bankTotalStatsApi = async () => {
    const result = await axios.get(statsUri);
    return result.data;
}