// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api';
// axios.defaults.params = {
//     key: '21828776-3a3234db6b008ce4834511463',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
// };

// const fetchImg = async ({ query="dog", page}) => {
//     const { data } = await axios
//         .get("", {
//             params: { q: query, page },
//         });
//     return data.hits;
// };

// export default fetchImg;

import axios from 'axios';

const apiKey = '4721358-13c427133c953f3e48d1d506d';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

const fetchImg = ({ query = '', currentPage = 1 }) => {
    const url = `${baseURL}${query}&page=${currentPage}`;
    return axios.get(url).then(({ data }) => data.hits);
};

export default fetchImg;
