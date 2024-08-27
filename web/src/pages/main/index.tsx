
import { useEffect } from "react";
import NewsAnimation from "../../components/newsBox";
import useGetBooks from "../../hooks/books/useGetBooks";
import * as S from "./style";
import useGetLands from "../../hooks/lands/useGetLands";
import useGetMe from "../../hooks/auth/useGetMe";
import useGetLocation from "../../hooks/locations/useGetLocation";

const Main = () => {

  const { ...book } = useGetBooks();
  const { ...land } = useGetLands();
  const { ...user } = useGetMe();
  const { ...location } = useGetLocation();

  useEffect(()=>{
    user.getMe();
  },[]);

  useEffect(()=>{
    if(user.user && user.user.analysis.location) {
      land.getLands(user.user.analysis.location);
    }
    location.getLocation();
    book.getBooks();
  },[user.user]);

  const linkTo = (url:string) => {
    window.open(url);
  }

  return (
    <S.Container>
      {user.user && <S.SectionTitle>분석을 통한 맞춤 정보</S.SectionTitle>}
      {user.user && user.user?.analysis.location === "아니오" && (
        <S.SolutionWrap>
          <h1 style={{ fontSize: "2rem" }}>
            아직 어디서 귀농을 할지 모르겠는 당신!
          </h1>
          <p style={{ wordBreak: "keep-all", fontSize: "1.3rem" }}>
            오래된 사찰이자 조계종의 중심지 가운데 하나인 고운사, 탑리
            오층석탑이 유명하며 특산물로는 마늘, 고추, 사과, 자두, 복숭아,
            황토쌀이 유명한 경북 의성군은 어때요?
          </p>
        </S.SolutionWrap>
      )}
      {user.user && !user.user?.analysis.hasLand && (
        <S.SolutionWrap>
          <h1 style={{ fontSize: "2rem" }}>아직 토지가 없는 당신!</h1>
          <p style={{ wordBreak: "keep-all", fontSize: "1.3rem" }}>
            - 농지 임대: 토지가 없다면, 임대 농지를 활용할 수 있습니다.
            지방자치단체나 농업 관련 협동조합에서 농지를 임대해 주는 프로그램을
            운영하기도 하니, 이를 적극적으로 활용해 보세요. <br />- 공유농장
            참여: 일부 지역에서는 공유농장을 운영하고 있으며, 여러 사람이 함께
            농사를 짓고 수익을 나누는 방식입니다.
          </p>
        </S.SolutionWrap>
      )}
      {user.user && !user.user?.analysis.hasExperience && (
        <S.SolutionWrap>
          <h1 style={{ fontSize: "2rem" }}>아직 농사 경험이 없는 당신!</h1>
          <p style={{ wordBreak: "keep-all", fontSize: "1.3rem" }}>
            농업 인턴십: 기존 농장에서 인턴으로 일하며 실습을 통해 경험을 쌓을
            수 있습니다. 이는 향후 독립적인 농업 활동을 위한 실질적인 도움이
            됩니다.
          </p>
        </S.SolutionWrap>
      )}
      {user.user && !user.user?.analysis.hasStudied && (
        <S.SolutionWrap>
          <h1 style={{ fontSize: "2rem" }}>농업에 대한 공부가 필요한 당신!</h1>
          <p style={{ wordBreak: "keep-all", fontSize: "1.3rem" }}>
            지자체나 정부에서 운영하는 귀농 관련 교육 프로그램을 통해 농업에
            대한 지식과 기술을 습득할 수 있습니다. 이를 통해 농업의 기본을
            배우고, 후속 지원을 받을 수 있습니다.
          </p>
        </S.SolutionWrap>
      )}
      {user.user && !user.user?.analysis.hasMoney && (
        <S.SolutionWrap>
          <h1 style={{ fontSize: "2rem" }}>뜻을 펼치기엔 자금이 없는 당신!</h1>
          <p style={{ wordBreak: "keep-all", fontSize: "1.3rem" }}>
            - 정부 지원 사업: 한국 정부는 귀농귀촌을 지원하기 위해 다양한
            프로그램을 운영하고 있습니다. 예를 들어, 창업 지원금, 저리 대출,
            주택 및 농지 구매 지원 등이 있습니다. 귀농 관련 사이트나
            농림축산식품부 홈페이지를 참고하세요. <br />- 청년 농업인 지원: 젊은
            농업인에게 특별히 제공되는 지원 프로그램이 있습니다. 귀농 초기
            비용이나 생활비 지원을 받을 수 있습니다. 더 많은 정보는 "지원사업"
            탭에 있습니다.
          </p>
        </S.SolutionWrap>
      )}
      <S.SectionTitle>이런 지역은 어때요?</S.SectionTitle>
      <S.ProvinceWrap>
        <S.ProvinceScroll>
          {location.locationData.map((item) => (
            <S.ProvinceBox $url={item.logo}>
              <S.ProvinceBoxHover>눌러서 지역 확인</S.ProvinceBoxHover>
            </S.ProvinceBox>
          ))}
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
