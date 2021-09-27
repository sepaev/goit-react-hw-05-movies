import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8948cf34f147d17edd39edcb74badce4';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-US' };

////////////// TRANDING
export const fetchTrandingMovies = async (timeWindow = 'day') => {
  return await axios.get(`/trending/movie/${timeWindow}`);
};

////////////// SEARCH
export const fetchMoviesByName = async (query, page = 1) => {
  return await axios.get('/search/movie', {
    params: {
      query,
      page,
      include_adult: false,
    },
  });
};

////////////// FILM INFO
export const fetchMoviesById = async id => {
  return await axios.get(`/movie/${id}`);
};

////////////// ACTORS
export const fetchActorsByMovieId = async id => {
  return await axios.get(`/movie/${id}/credits`);
};

////////////// FILM REVIEWS
export const fetchReviewsByMovieId = async (id, page = 1) => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      page,
    },
  });
};
