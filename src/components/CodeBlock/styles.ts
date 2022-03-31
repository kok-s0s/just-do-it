import styled from 'styled-components'

export const Questions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Random = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    left: 3rem;
    bottom: 8rem;
    text-align: center;
`

export const Challenge = styled.div`
    border: border;
    width: 130px;
    height: 120px;
    margin-right: 1rem;
    background-color: #99bdd4;
    font-size: 40px;
    line-height: 120px;
    letter-spacing: 2px;
    color: #f0f7f8;
    cursor: pointer;
    border-radius: 10px;
`

export const GoToCode = styled.a`
    position: fixed;
    left: 1.5rem;
    bottom: 1.5rem;
    padding: 20px;
    background-color: #99bdd4;
    font-size: 1.1rem;
    letter-spacing: 1px;
    color: #f0f7f8;
    text-decoration: none;
    border-radius: 10px;
    &:hover,
    &:focus {
        color: #d8efef;
    }
    &:active {
        color: #d8efef;
    }
`
