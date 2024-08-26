import axios from "axios";
import { useState } from "react";
import { NewsType } from "../../types/news/news.type";

const useGetNews = () => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);

  const getNews = async () => {

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/news`
    );
    console.log(res.data);
    setNewsData(res.data);
  };

  return {
    newsData,
    getNews,
  };
};

export default useGetNews;
