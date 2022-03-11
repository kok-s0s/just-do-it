import styled from 'styled-components'

export const WeatherCard = styled.div`
    opacity: 0.5;
    background-color: #dceeef;
    border-radius: 10px;
    margin-top: 0.5rem;
    padding: 1rem;
    width: 95%;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Desc = styled.span`
    font-size: 28px;
    letter-spacing: 1px;
    color: #6f6f6f;
    margin-right: 0.8rem;
`

export const Icon = styled.img`
    display: inline-block;
    width: 90px;
`

export const Location = styled.span`
    cursor: pointer;
`
