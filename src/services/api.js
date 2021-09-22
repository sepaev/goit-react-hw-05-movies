import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8948cf34f147d17edd39edcb74badce4';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-US' };

////////////// TRANDING
// https://api.themoviedb.org/3/trending/movie/{timeWindow}?api_key={api_key}
// time_window - day/week
export const fetchTrandingMovies = async (timeWindow = 'week') => {
  return await axios.get(`/trending/movie/${timeWindow}`, {});
};

////////////// SEARCH
// https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query={query}&page={page}&include_adult=false
// query
// page
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
// https://api.themoviedb.org/3/movie/{movie_id}?api_key={api_key}&language=en-US
// movie_id
export const fetchMoviesById = async id => {
  return await axios.get(`/movie/${id}`, {});
};

////////////// ACTORS
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key={api_key}&language=en-US
// movie_id
export const fetchActorsByMovieId = async id => {
  return await axios.get(`/movie/${id}/credits`, {});
};

////////////// FILM REVIEWS
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key={api_key}&language=en-US&page=1
// movie_id
// page
export const fetchReviewsByMovieId = async (id, page = 1) => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      page,
    },
  });
};
