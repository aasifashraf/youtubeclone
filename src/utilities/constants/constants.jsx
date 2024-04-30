export const youtubelogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png";

const API_KEY = "AIzaSyBBgW1Yzoj1X-PmairL5Gc0EfzeMtHC5ZE";

export const API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=50`;
