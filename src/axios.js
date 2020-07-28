import axios from 'axios';

// * Starting url for all theses http requests
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
