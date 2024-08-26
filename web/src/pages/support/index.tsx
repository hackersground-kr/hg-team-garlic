import IonIcon from "@reacticons/ionicons";
import * as S from "./style";
import { useState } from "react";

const Support = () => {
  const [condition, setCondition] = useState<"NEW"|"MONEY">("NEW");

  const changeCondition = (condition:string) => {
    setCondition(condition as "NEW"|"MONEY");
  }


  return (
    <S.Container>
      <S.PageTitle>지원사업</S.PageTitle>
      <S.Head>
        <S.TitleHead>내용</S.TitleHead>
        <S.ExpireHead>만료일</S.ExpireHead>
      </S.Head>
      <S.PostWrap>
        <S.PostList>
          <S.Post>
            <S.PostTitle>[의성군] 청년 농부 지원사업</S.PostTitle>
            <S.PostExpire>2024-10-31</S.PostExpire>
          </S.Post>
          <S.Post>
            <S.PostTitle>[서울특별시] 도시농부 시원사업</S.PostTitle>
            <S.PostExpire>2024-12-25</S.PostExpire>
          </S.Post>
        </S.PostList>
      </S.PostWrap>
      <S.FilterWrap>
        <S.Select
          $selected={condition === "NEW"}
          onClick={() => {
            changeCondition("NEW");
          }}
        >
          최신순
        </S.Select>
        <S.Select
          $selected={condition === "MONEY"}
          onClick={() => {
            changeCondition("MONEY");
          }}
        >
          지원금 순
        </S.Select>
        <S.SearchWrap>
          <S.Search type="search" placeholder="검색" />
          <IonIcon
            name="search-outline"
            size="large"
            style={{ fontSize: "1.3rem", cursor: "pointer" }}
          />
        </S.SearchWrap>
      </S.FilterWrap>
    </S.Container>
  );
};

export default Support;
