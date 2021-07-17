import axios from "axios";

const KEY = "AIzaSyDp4vHgadqbtCfvdRJ2UFqEtAv7FfuZvfo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
