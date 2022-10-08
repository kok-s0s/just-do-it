import styled from "styled-components";

export const WeatherCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.4rem;
  background-color: #edf6f7;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: rgba(80, 80, 80, 0.5);
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const Icon = styled.img`
  height: 30px;
`;

export const Location = styled.div`
  cursor: pointer;
`;
