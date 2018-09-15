import axios from 'axios';
import { FETCH_LINK, ON_LOADING, ON_LOADED } from './types';

const serverURL = 'http://zingvid.herokuapp.com/';

export const fetchLink = (link) => async (dispatch) => {
    const response = await axios.post(serverURL, { link });
    
    dispatch({
        type: FETCH_LINK,
        payload: response
    });
}

export function onLoading() {
    const loaded = false;
    return {
        type: ON_LOADING,
        payload: loaded
    }
}

export function onLoaded() {
    const loaded = true;
    return {
        type: ON_LOADED,
        payload: loaded
    }
}

// export const fetchLink = () => {
//     return (dispatch) => {
//         axios.post(serverURL, { link })
//             .then(res => dispatch({
//                 type: FETCH_LINK,
//                 payload: res
//             }));
//     }
// }