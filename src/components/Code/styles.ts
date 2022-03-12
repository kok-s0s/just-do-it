import styled from 'styled-components'

export const Container = styled.div``

export const GoToCode = styled.a`
    position: fixed;
    right: 1.5rem;
    border-radius: 10px;
    padding: 20px;
    background-color: #99bdd4;
    color: #f0f7f8;
    letter-spacing: 1px;
    font-size: 1.1rem;
    text-decoration: none;
    &:hover,
    &:focus {
        color: #3874cb;
    }
    &:active {
        color: #cfdef2;
    }
`
