import styled from 'styled-components'

export const WeatherCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 2rem;
  background-color: #edf6f7;
  border-radius: 10px;
`

export const Desc = styled.span`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-content: center;
  font-size: 1.5rem;
  line-height: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  color: rgba(80, 80, 80, 0.5);
`

export const Icon = styled.img`
  display: inline-block;
  width: 80px;
  padding-left: 1rem;
`

export const Location = styled.span`
  cursor: pointer;
`
