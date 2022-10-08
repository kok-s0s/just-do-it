import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.div`
  animation: ${rotate} 3s linear infinite;
  & svg {
    z-index: -1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 100vw;
  height: 100vh;
  padding: 12rem;
`;

export const Entry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding: 0 2rem 0 2rem;
  background-color: #fffffe;
  border-radius: 50px;
  transition: 0.5s;
  & svg {
    padding: 2rem;
    transition: 0.5s;
  }
  &:hover {
    transform: translateY(-40px);
  }
  &:hover div:first-child {
    transform: scale(1.2);
  }
  &:hover svg {
    transform: rotate(360deg) scale(1.1);
  }
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #272343;
  transition: 0.5s;
`;

export const Button = styled.button`
  width: 270px;
  align-self: center;
  background-color: #bae8e8;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: rgba(80, 80, 80);
  cursor: pointer;
  display: inline-block;
  font-family: "Macondo", "Noto Serif SC";
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 23px;
  outline: none;
  padding: 0.75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    transform: translate3d(0, 2px, 0);
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
  }
`;
