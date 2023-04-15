import axios from "axios";

const KEY = "AIzaSyAnRIpaXVdfHw9Mdm56GRHtsfZ5a4WevEE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key: KEY,
  },
});
