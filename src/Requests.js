const API_KEY = "e60089c1bc3f6d467612a05808c602fa";

//NB: When axios is making these request to the API, it appends the baseUrl: https://api.themoviedb.org/3 defined in axios.js so the full url sent will be like: https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
