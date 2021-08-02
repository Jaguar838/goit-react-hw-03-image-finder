import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//     key: '21828776-3a3234db6b008ce4834511463',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
// };

export const fetchImg = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get('', {
            params: {
                key: '21828776-3a3234db6b008ce4834511463',
                image_type: 'photo',
                orientation: 'horizontal',
                per_page: 12,
                q: searchQuery,
                page: currentPage,
            },
        })
        .then(({ data }) => console.log(data));
};
