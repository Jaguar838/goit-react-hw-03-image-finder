const KEY = "21828776-3a3234db6b008ce4834511463";
const URL = 'https://pixabay.com/api/';
const TUNING = 'image_type=photo&orientation=horizontal';

export default class ApiService {
    constructor() {
        this.currentPage = 1;
        this.searchQuery = '';
        this.selectData = 'all';

    };


    fetchContent() {
        const url = `${URL}?${TUNING}&q=${this.searchQuery}&image_type=${this.selectData}&page=${this.currentPage}&per_page=12&key=${KEY}`
        return fetch(url).then(res => res.json()).then(({ hits }) => {
            this.incrementPage();
            return hits;
        });
    }

    // async fetchContent() {       
    //     try {
    //         const queryFetch = await fetch(`${URL}?${TUNING}&q=${this.searchQuery}&page=${this.currentPage}&per_page=12&key=${KEY}`)
    //         const result = await queryFetch.json();
    //         return result;
    //     } catch {
    //         return alertBadQuery();
    //     }
    // }

    incrementPage() {
        this.currentPage += 1;
    }

    resetPage() {
        this.currentPage = 1
    }


    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


import axios from 'axios';

class APIService {
  constructor() {
    this.temp = '';
    this.API_KEY = '8978731d3453660c119868bf0fe3e32f';
    this.baseURL = 'https://api.themoviedb.org/3';
    this.imageBaseURL = 'https://image.tmdb.org/t/p';
    this.logoSizes = ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'];
    this.posterSizes = [
      'w92',
      'w154',
      'w185',
      'w342',
      'w500',
      'w780',
      'original',
    ];
  }

  makeImagePath = (path, size) => {
    if (path !== null) {
      return `${this.imageBaseURL}/${this.logoSizes[size]}${path}`;
    } else {
      return null;
    }
  };

  getData = async url => {
    try {
      const response = await axios.get(url);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  getTrending = lang => {
    this.temp = `${this.baseURL}/trending/movie/day?api_key=${this.API_KEY}&language=${lang}`;

    return this.getData(this.temp);
  };

  getMovieInfo = (id, lang) =>
    this.getData(
      `${this.baseURL}/movie/${id}?api_key=${this.API_KEY}&append_to_response=videos&language=${lang}`,
    );

  getSearchResult = (query, lang) => {
    this.temp = `${this.baseURL}/search/movie?api_key=${this.API_KEY}&language=${lang}&include_adult=true&query=${query}`;

    return this.getData(this.temp);
  };

  getTrailer = id => {
    return this.getData(
      `${this.baseURL}/movie/${id}/videos?api_key=${this.API_KEY}`,
    );
  };

  getNextPage = page => {
    return this.getData(`${this.temp}&page=${page}`);
  };
}

const apiService = new APIService();
export default apiService;


import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://pixabay.com/api";
axios.defaults.params = {
  key: "4423902-dbd0f970c0cc60dbb84d66d4b",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

async function getImagesByQuery(searchQuery, page) {
  const { data } = await axios
    .get("", {
      params: { q: searchQuery, page },
    })
    .catch(function (error) {
      toast.error(error);
    });
  return data.hits;
}

export { getImagesByQuery };
