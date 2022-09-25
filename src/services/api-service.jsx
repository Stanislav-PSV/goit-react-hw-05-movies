import axios from 'axios';
import {
	normalizeMovies,
	normalizeMoviesDetails,
} from '../helpers/normalization-obj';

const API_KEY = 'b063f89d2471ef15de012ba417095fa1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
	api_key: API_KEY,
	include_adult: false,
	language: 'en-US',
};

export const fetchTrendingMovies = async () => {
	const { data } = await axios.get(`/trending/all/day?`);
	const response = normalizeMovies(data.results);
	return response;
};

export const fetchMoviesById = async id => {
	const { data } = await axios.get(`/movie/${id}?`);
	const response = normalizeMoviesDetails(data);
	return response;
};

export const fetchMoviesBySearch = async query => {
	const { data } = await axios.get(`/search/movie?query=${query}&page=1`);
	const response = normalizeMovies(data.results);
	return response;
};

export const fetchMoviesCredits = async id => {
	const { data } = await axios.get(`/movie/${id}/credits?`);
	return data.cast;
};

export const fetchMoviesReviews = async id => {
	const { data } = await axios.get(`/movie/${id}/reviews?`);
	return data.results;
};