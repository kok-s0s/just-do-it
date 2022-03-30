import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #d8efef;
`

export const Back = styled.button`
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    border: none;
    padding: 15px;
    background-color: #69a9c9;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    border-radius: 50%;
    &:hover,
    &:focus {
        color: #3874cb;
    }
    &:active {
        color: #cfdef2;
    }
`

export const BText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
`
