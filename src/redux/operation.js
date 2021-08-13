import axios from 'axios';
import { getIMGrequest, getIMGsuccess, getIMGerror } from './action';
axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
    key: '21828776-3a3234db6b008ce4834511463',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const getGalleryItems =
    (query = '', currentPage = 1) =>
    dispatch => {
        dispatch(getIMGrequest);
        axios
            .get('', {
                params: { q: query, page: currentPage },
            })
            .then(response => {
                console.log(response);
                dispatch(getIMGsuccess(response.data.hits));
            })
            .catch(error => {
                console.error(error);
                dispatch(getIMGerror(error));
            });
    };

// const fetchImg = async () => {
//     const { data } = await axios.get('', {
//         params: { q: query, page: currentPage },
//     });
//     return data.hits;
// };
