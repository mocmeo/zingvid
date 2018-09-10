import axios from 'axios';
import { FETCH_LINK } from './types';

const serverURL = 'http://zingvid.herokuapp.com/';

export const fetchLink = () => async (dispatch) => {
    const res = await axios.post(serverURL, { link });
    
    dispatch({
        type: FETCH_LINK,
        payload: res.data
    });
}

// export const fetchLink = () => {
//     return (dispatch) => {
//         axios.post(serverURL, { link })
//             .then(res => dispatch({
//                 type: FETCH_LINK,
//                 payload: res.data
//             }));
//     }
// }