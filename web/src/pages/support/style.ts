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
  display: flex;
  align-items: center;
  flex-direction:column;
  font-size: 2rem;
  animation: ${SlideIn} 0.3s forwards;
`;

export const PageTitle = styled.h1`
  font-size:2.5rem;
  align-self:flex-start;
  margin:3rem;
  margin-bottom:1rem;
`
export const Head = styled.div`
  width:calc(100% - 6rem);
  height:5rem;
  background-color:#F1F1F1;
  margin: 0 auto;
  display:flex;
  font-size:1.7rem;
  margin-bottom:2rem;
  padding:0 1rem;
  box-sizing:border-box;
`
export const TitleHead = styled.div`
  width:calc(100% - 10rem);
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const ExpireHead = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PostWrap = styled.div`
  width:calc(100% - 6rem);
  margin: 0 auto;
  flex:1 1 0;
  overflow-y:auto;
`
export const PostList = styled.div`
  width:100%;
  height:min-content;
`
export const Post = styled.div`
  width: 100%;
  height: 5rem;
  border:0.1rem solid #ccc;
  margin: 0 auto;
  display: flex;
  font-size: 1.7rem;
  box-sizing:border-box;
  margin-bottom:1rem;
  padding:0 1rem;
  cursor: pointer;
`;
export const PostTitle = styled.div`
  width: calc(100% - 10rem);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PostExpire = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterWrap = styled.div`
  width:calc(100% - 6rem);
  margin:0 auto;
  height:12rem;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
`

export const Select = styled.div<{ $selected: boolean }>`
  background-color: ${(props) => (props.$selected ? "#34C831" : "#F1F1F1")};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.$selected ? "#FFF" : "#000")};
  cursor: pointer;
`;

export const SearchWrap = styled.div`
  width:50%;
  padding:1rem;
  border-radius:1rem;
  background-color:#F1F1F1;
  display:flex;
  justify-content:center;
`
export const Search = styled.input`
  width:80%;
  height:100%;
  background-color:transparent;
  border:none;
  outline:none;
  font-size:2rem;
`