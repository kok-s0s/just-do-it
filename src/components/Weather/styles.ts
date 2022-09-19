import styled from 'styled-components'

export const WeatherCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  background-color: #edf6f7;
  border-radius: 10px;
  font-size: 1.5rem;
  line-height: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  color: rgba(80, 80, 80, 0.5);
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 80px;
`

export const Icon = styled.img`
  display: inline-block;
  height: 40px;
`

export const Location = styled.div`
  cursor: pointer;
`
