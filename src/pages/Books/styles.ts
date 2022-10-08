import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  height: 100vh;
  padding: 2rem;
`;

export const Tab = styled.div`
  display: flex;
  margin-bottom: 2rem;
  color: #565f68;
  & input {
    appearance: none;
  }
  & input:checked ~ section {
    max-height: 100vh;
  }
  & label {
    flex: 0 0 20%;
    min-width: 20%;
    & button {
      width: 100%;
      background-color: #f6f8fa;
      color: #565f68;
      border: 0.125em solid #565f68;
      cursor: pointer;
      font: 600 1.5rem/1.25 "Montserrat", sans-serif;
      letter-spacing: 0.125em;
      padding: 0.5em 0.75em;
      position: relative;
      text-transform: uppercase;
      &:before,
      &:after {
        content: "";
        position: absolute;
        transition: all 0.125s ease-in-out;
      }
      &:after {
        border: 0.125em dashed #565f68;
        bottom: -0.125em;
        left: -0.125em;
        right: -0.125em;
        top: -0.125em;
        z-index: -1;
      }
      &:hover:after {
        bottom: -0.375em;
        left: -0.375em;
        right: 0.125em;
        top: 0.125em;
      }
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-height: 0;
  padding-left: 1rem;
  transition: 1s ease-in-out;
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  & > span {
    padding-left: 1rem;
    font-family: -apple-system;
    font-size: 1.5rem;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

export const List = styled.div`
  display: flex;
  gap: 2rem;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  position: relative;
  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 220px;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 100;
  opacity: 0;
  & > span {
    font-family: -apple-system;
    font-size: 1rem;
  }
  & > span:first-child {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2.5px;
    padding-bottom: 0.5rem;
  }
`;
