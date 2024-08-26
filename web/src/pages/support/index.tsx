import useGetSupport from "../../hooks/support/useGetSupport";
import * as S from "./style";
import { useEffect, useState } from "react";

const Support = () => {
  const [condition, setCondition] = useState<"FARMING"|"JOB"|"ECONOMY"|"EDUCATION"|"ENVIRONMENT">("FARMING");
  const { ...support } = useGetSupport();

  const changeCondition = (condition:string) => {
    setCondition(
      condition as "FARMING" | "JOB" | "ECONOMY" | "EDUCATION" | "ENVIRONMENT"
    );
  }

  const linkTo = (url:string) => {
    window.open(url);
  }

  useEffect(()=>{
    support.getSupport(condition);
  },[condition]);

  return (
    <S.Container>
      <S.PageTitle>지원사업</S.PageTitle>
      <S.Head>
        <S.TitleHead>내용</S.TitleHead>
        <S.ExpireHead>만료일</S.ExpireHead>
      </S.Head>
      <S.PostWrap>
        <S.PostList>
          {support.supportData && support.supportData.map((item) => (
            <S.Post onClick={()=>{linkTo(item.url)}}>
              <S.PostTitle>{`[${item.host}] ${item.title}`}</S.PostTitle>
              <S.PostExpire>{item.deadline}</S.PostExpire>
            </S.Post>
          ))}
        </S.PostList>
      </S.PostWrap>
      <S.FilterWrap>
        <S.Select
          $selected={condition === "FARMING"}
          onClick={() => {
            changeCondition("FARMING");
          }}
        >
          농사
        </S.Select>
        <S.Select
          $selected={condition === "JOB"}
          onClick={() => {
            changeCondition("JOB");
          }}
        >
          직업
        </S.Select>
        <S.Select
          $selected={condition === "ECONOMY"}
          onClick={() => {
            changeCondition("ECONOMY");
          }}
        >
          경제
        </S.Select>
        <S.Select
          $selected={condition === "EDUCATION"}
          onClick={() => {
            changeCondition("EDUCATION");
          }}
        >
          교육
        </S.Select>
        <S.Select
          $selected={condition === "ENVIRONMENT"}
          onClick={() => {
            changeCondition("ENVIRONMENT");
          }}
        >
          환경
        </S.Select>
      </S.FilterWrap>
    </S.Container>
  );
};

export default Support;
