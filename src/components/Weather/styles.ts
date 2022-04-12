import styled from 'styled-components'

export const WeatherCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: 0.5rem;
    background-color: #edf6f7;
    border-radius: 10px;
`

export const Desc = styled.span`
    margin-right: 0.8rem;
    font-size: 28px;
    letter-spacing: 1px;
    color: #b7b7b7;
`

export const Icon = styled.img`
    display: inline-block;
    width: 90px;
`

export const Location = styled.span`
    cursor: pointer;
`
