import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #d8efef;
`

export const Logo = styled.img`
    margin-bottom: 1rem;
`

export const Desc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 3rem 0;
`

export const Text = styled.p`
    color: #094067;
    font-size: 1.125rem;
    line-height: 2rem;
    font-weight: 500;
`

export const Button = styled.button`
    width: 400px;
    height: 50px;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    border: 3px solid;
    padding: 0.25em 0.5em;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px,
        4px 4px 0px 0px, 5px 5px 0px 0px;
    position: relative;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:active {
        box-shadow: 0px 0px 0px 0px;
        top: 5px;
        left: 5px;
    }
`

export const FDBK = styled.a`
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    padding: 15px;
    background-color: #69a9c9;
    color: white;
    text-decoration: none;
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
    box-sizing: border-box;
    width: 32px;
    height: 32px;
`
