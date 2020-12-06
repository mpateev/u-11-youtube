import axios from 'axios';

const KEY = 'AIzaSyCA5dcBHSDsc4nauI9V55pavbiI_1HtaUg';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});