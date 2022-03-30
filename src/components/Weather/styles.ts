import styled from 'styled-components'

export const WeatherCard = styled.div`
    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;
    background-color: #dceeef;
    border-radius: 10px;
    opacity: 0.5;
`

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Desc = styled.span`
    margin-right: 0.8rem;
    font-size: 28px;
    letter-spacing: 1px;
    color: #6f6f6f;
`

export const Icon = styled.img`
    display: inline-block;
    width: 90px;
`

export const Location = styled.span`
    cursor: pointer;
`
