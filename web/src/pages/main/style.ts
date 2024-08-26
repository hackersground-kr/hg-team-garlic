import styled, { keyframes } from "styled-components";


const SlideIn = keyframes`
  0% {
    margin-left:5rem;
  }
  100% {
    margin-left:0;
  }
`;

export const Container = styled.div`
  width: 100%;
  flex: 1;
  height:100%;
  font-size: 2rem;
  animation: ${SlideIn} 0.3s forwards;
  padding: 2rem 0;
  box-sizing:border-box;
  overflow-y:scroll;
`;

export const ProvinceWrap = styled.div`
  width: 100%;
  height: 30rem;
  overflow-x: scroll;
  padding: 0 1rem;
  box-sizing:border-box;
  margin-bottom:2rem;
`;
export const SectionTitle = styled.h1`
  font-size:2.5rem;
  margin-bottom:1rem;
  margin-left:2rem;
`
export const ProvinceScroll = styled.div`
  width: min-content;
  display:flex;
  height: 100%;
`;
export const ProvinceBox = styled.div`
  width: 27rem;
  height: 27rem;
  background-color:#F1F1F1;
  border-radius:1rem;
  margin:2rem;
`
export const TodayNewsWrap = styled.div`
  width:100%;
  overflow:hidden;
  height:20rem;
  padding: 0 2rem;
  box-sizing:border-box;
  margin-bottom: 3rem;
`
export const NewsWrap = styled.div<{$img:string}>`
  width:100%;
  height:15rem;
  background:url(${props=>props.$img}) no-repeat center;
  background-size:cover;
  border-radius:1rem;
  display:flex;
  align-items:flex-end;
`
export const NewsHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 30%;
  border-radius: 0 0 1rem 1rem;
`;

export const BookWrap = styled.div`
  width: 100%;
  height: 41rem;
  overflow-x: scroll;
  padding: 0 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
`;
export const BookScroll = styled.div`
  width: min-content;
  display: flex;
  height: 100%;
`;
export const BookBox = styled.div`
  width:27rem;
  height:40rem;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  cursor:pointer;
  margin-right:2rem;
  border:0.1rem solid #ccc;
  &>img{
    width:27rem;
    height:27rem;
    object-fit:cover;
    object-position:center;
  }
`
export const BookInfo = styled.div`
  width:27rem;
  height:13rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  padding:1rem;
  box-sizing:border-box;
  &>h1{
    font-size:1.7rem;
    font-weight:300;
    margin-bottom:1rem;
    word-break:keep-all;
  }
  &>p{
    font-size:1.2rem;
    font-weight:200rem;
    word-break:keep-all;
  }
`
export const LandWrap = styled.div`
  width:100%;
  height:70rem;
  margin-bottom:3rem;
  padding: 2rem;
  box-sizing:border-box;
`

export const LandBox = styled.div`
  width:100%;
  height:15rem;
  box-shadow:0.1rem 0.1rem 1rem 0.1rem #ccc;
  margin-bottom:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  &>img{
    width: 13rem;
    height:13rem;
    object-fit:cover;
    object-position:center;
    margin-right: 1rem;
  }
`
export const LandInfo = styled.div`
  width: calc(90% - 14rem);
  height: 14rem;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
`