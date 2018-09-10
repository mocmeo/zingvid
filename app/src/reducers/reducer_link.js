import { FETCH_LINK } from '../actions/types';

const initialState = {
    title: 'Singapore chuẩn bị đón Trung thu với đèn lồng rồng, phượng rực rỡ',
    source: 'https://znews-mcloud-bf-s2.zadn.vn/HvDy1JxmVqE/6febe967dc23357d6c32/4f17c6580d1ce442bd0d/480/Trung_thu_Singapore.mp4?authen=exp=1536718863~acl=/HvDy1JxmVqE/*~hmac=8d80de3db424df19082816abba962d52'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LINK:
            const { title, source } = action.payload.data;
            return { title, source };
        default:
            return state;
    }
}

