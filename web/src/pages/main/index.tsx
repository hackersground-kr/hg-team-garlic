
import { useEffect } from "react";
import NewsAnimation from "../../components/newsBox";
import useGetBooks from "../../hooks/books/useGetBooks";
import * as S from "./style";
import useGetLands from "../../hooks/lands/useGetLands";
import useGetMe from "../../hooks/auth/useGetMe";

const Main = () => {

  const { ...book } = useGetBooks();
  const { ...land } = useGetLands();
  const { ...user } = useGetMe();

  useEffect(()=>{
    user.getMe();
  },[]);

  useEffect(()=>{
    if(user.user && user.user.analysis.location) {
      land.getLands(user.user.analysis.location);
    }else{
      land.getLands('');
    }
    book.getBooks();
  },[user.user]);

  const linkTo = (url:string) => {
    window.open(url);
  }

  return (
    <S.Container>
      <S.SectionTitle>이런 지역은 어때요?</S.SectionTitle>
      <S.ProvinceWrap>
        <S.ProvinceScroll>
          <S.ProvinceBox></S.ProvinceBox>
          <S.ProvinceBox></S.ProvinceBox>
          <S.ProvinceBox></S.ProvinceBox>
          <S.ProvinceBox></S.ProvinceBox>
        </S.ProvinceScroll>
      </S.ProvinceWrap>
      {land.landData.length > 0 && (
        <>
          <S.SectionTitle>당신의 사업에 딱인 토지들</S.SectionTitle>
          <S.LandWrap>
            {land.landData.map((item) => (
              <S.LandBox>
                <img src={item.cover} alt="" />
                <S.LandInfo>
                  <h1>{item.name}</h1>
                  <p>주소: {item.address}</p>
                  <p>
                    위도: {item.latitude} / 경도: {item.longitude}
                  </p>
                  <p>매매: {item.price}₩</p>
                </S.LandInfo>
              </S.LandBox>
            ))}
          </S.LandWrap>
        </>
      )}
      <S.SectionTitle>농촌 핫이슈</S.SectionTitle>
      <S.TodayNewsWrap>
        <NewsAnimation />
      </S.TodayNewsWrap>
      <S.SectionTitle>농업 관련 서적</S.SectionTitle>
      <S.BookWrap>
        <S.BookScroll>
          {book.bookData.map((item, idx) => (
            <S.BookBox
              key={idx}
              onClick={() => {
                linkTo(item.url);
              }}
            >
              <img src={item.cover} alt="" />
              <S.BookInfo>
                <h1>
                  {item.title} - {item.author}
                </h1>
                <p>{item.summary.slice(0, 70) + "..."}</p>
              </S.BookInfo>
            </S.BookBox>
          ))}
        </S.BookScroll>
      </S.BookWrap>
    </S.Container>
  );
};

export default Main;
