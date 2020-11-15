import axios from 'axios';

export default {
    getPageStatus: pageUrl => {
        return axios.get(pageUrl)
    }
}