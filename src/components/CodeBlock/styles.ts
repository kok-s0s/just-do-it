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
    text-align: center;
    left: 3rem;
    bottom: 8rem;
`

export const Challenge = styled.div`
    border: border;
    border-radius: 10px;
    width: 130px;
    height: 120px;
    background-color: #99bdd4;
    color: #f0f7f8;
    font-size: 40px;
    line-height: 120px;
    letter-spacing: 2px;
    margin-right: 1rem;
    cursor: pointer;
`

export const GoToCode = styled.a`
    position: fixed;
    left: 1.5rem;
    bottom: 1.5rem;
    border-radius: 10px;
    padding: 20px;
    background-color: #99bdd4;
    color: #f0f7f8;
    letter-spacing: 1px;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover,
    &:focus {
        color: #d8efef;
    }
    &:active {
        color: #d8efef;
    }
`
