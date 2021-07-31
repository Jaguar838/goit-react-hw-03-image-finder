import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
    key: '21828776-3a3234db6b008ce4834511463',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
};

export const fetchImg = async ImgByQuery({ searchQuery = '', currentPage = 1 }) => {
  const { data } = await axios.get('', {
      params: {
        q: searchQuery,
        page: currentPage,
      },
    })
  .catch(error => {
        toast.error(error);
    };
  return data.hits;
};
