import axios from "axios";

const apikey = "AIzaSyBB8e2BzFjXiwDA0RVo4hV3SnxjwfCT-K8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: apikey,
  },
});
