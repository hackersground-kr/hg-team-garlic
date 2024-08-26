import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0%, 20% {
    opacity: 1;
    visibility: visible;
  }
  20.01%, 100% {
    opacity: 0;
    visibility: hidden;
  }
`;

export const NewsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const NewsItem = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease-in-out, visibility 1s ease-in-out;

  &:nth-child(1) {
    animation: ${fadeInOut} 25s infinite;
  }

  &:nth-child(2) {
    animation: ${fadeInOut} 25s infinite 5s;
  }

  &:nth-child(3) {
    animation: ${fadeInOut} 25s infinite 10s;
  }

  &:nth-child(4) {
    animation: ${fadeInOut} 25s infinite 15s;
  }

  &:nth-child(5) {
    animation: ${fadeInOut} 25s infinite 20s;
  }
`;

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
