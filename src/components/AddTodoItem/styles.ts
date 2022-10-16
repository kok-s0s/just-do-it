import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.8rem 0.6rem 0 0.6rem;
`;

export const Input = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  letter-spacing: 1px;
  border-radius: 6px;
  border-style: solid;
  border-width: 0.1px;
  border-color: rgb(227, 230, 234);
  font-family: -apple-system;
  font-size: 14px;
  line-height: 21px;
  padding: 8px 12px;
  &:focus {
    outline: none !important;
    border-color: rgb(113, 158, 206);
    box-shadow: 0 0 10px rgb(113, 158, 206);
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  padding: 0.4rem 0 0.2rem 0;
  & .disabled {
    opacity: 0.5;
  }
`;

export const BClick = styled.button`
  font-size: 0.9rem;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 6px;
  padding: 0.5rem 1.5rem;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
`;

export const Confirm = styled(BClick)`
  border-color: rgb(153, 196, 158);
  background-color: rgb(45, 164, 78);
  color: rgb(255, 255, 255);
`;

export const Cancel = styled(BClick)`
  border-color: rgb(227, 230, 234);
  background-color: rgb(255, 255, 254);
  color: rgba(80, 80, 80);
`;
