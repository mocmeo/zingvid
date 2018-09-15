import { FETCH_LINK, ON_LOADING, ON_LOADED } from '../actions/types';

const initialState = {
    title: 'Singapore chuẩn bị đón Trung thu với đèn lồng rồng, phượng rực rỡ',
    source: 'https://znews-mcloud-bf-s2.zadn.vn/HvDy1JxmVqE/6febe967dc23357d6c32/4f17c6580d1ce442bd0d/480/Trung_thu_Singapore.mp4?authen=exp=1537023662~acl=/HvDy1JxmVqE/*~hmac=f6b9213f0f68f793ae833c7beac266ee',
    download_link: 'https://znews-mcloud-bf-s2.zadn.vn/HvDy1JxmVqE/6febe967dc23357d6c32/4f17c6580d1ce442bd0d/480/Trung_thu_Singapore.mp4?authen=exp=1537023662~acl=/HvDy1JxmVqE/*~hmac=f6b9213f0f68f793ae833c7beac266ee'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LINK:
            const { title, source, download_link } = action.payload.data;
            return { title, source, download_link };
        case ON_LOADING:
        case ON_LOADED:
            return { ...state, loaded: action.payload }
        default:
            return state;
    }
}

