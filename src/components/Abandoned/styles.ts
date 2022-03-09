import styled from 'styled-components'

export const Button = styled.button`
    flex-grow: 1;
    margin: 0 1rem 0 2rem;
    height: 10vh;
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