import styled from "styled-components";

export const PlanItem = styled.div`
  width: 100%;
  background-color: rgb(246, 248, 250);
  border-radius: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  background-color: rgb(246, 248, 250);
`;

export const Combination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 0.8rem 0.5rem 0.8rem;
`;

export const Count = styled.span`
  width: 1.4rem;
  height: 1.4rem;
  background-color: rgb(175, 184, 193);
  font-family: -apple-system;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.4rem;
  text-align: center;
  color: rgba(80, 80, 80);
  border-radius: 50%;
`;

export const ListTitle = styled.span`
  font-family: -apple-system;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.4rem;
  letter-spacing: 1.3px;
  color: rgba(80, 80, 80, 0.8);
`;

export const AddItem = styled.span`
  display: flex;
  cursor: pointer;
  & .rotate {
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }
  & .rotateBack {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
`;
