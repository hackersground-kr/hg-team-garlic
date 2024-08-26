import { useEffect } from "react";
import useGetNews from "../../hooks/news/useGetNews";
import * as S from './style';

const NewsAnimation = () => {

  const { ...news } = useGetNews();

  useEffect(() => {
    news.getNews();
  }, []);

  const linkTo = (url:string) => {
    window.open(url);
  }

  return (
    <S.NewsContainer>
      {news.newsData &&
        news.newsData.map((item) => (
          <S.NewsItem
            key={item.id}
            style={{ backgroundImage: `url(${item.image_url})` }
            }
            onClick={() => {
              linkTo(item.content_url);
            }}
          >
            <S.NewsHeader>{item.title}</S.NewsHeader>
          </S.NewsItem>
        ))}
    </S.NewsContainer>
  );
};

export default NewsAnimation;
