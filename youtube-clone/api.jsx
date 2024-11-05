



import axios from 'axios';

const API_KEY = 'AIzaSyBeheh7HXrh-db7dK7ncIIz0wnBY_7kHJc';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      maxResults: 20,
      q: query,
      key: API_KEY,
    },
  });
  return response.data.items;
};

// Add this function to fetch video details by ID
export const fetchVideoDetails = async (videoId) => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet,contentDetails,statistics',
      id: videoId,
      key: API_KEY,
    },
  });
  return response.data.items[0];
};
