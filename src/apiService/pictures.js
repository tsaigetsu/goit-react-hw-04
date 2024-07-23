import axios from "axios";

const fetchPictures = async (searchValue, page = 1, per_page = 5) => {
  const accessKey = "mKl4HWZDm9TQAX7hIWMXYsezaqscAetuYufJQcGi1yA";
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: searchValue,
      page,
      per_page,
    },
  });
  return res.data;
};

export default fetchPictures;

