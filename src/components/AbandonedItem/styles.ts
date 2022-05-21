import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    min-height: 10vh;
    border: 1px solid #e3e6ea;
    padding: 0.3rem;
    margin: 0.6rem 0.5rem;
    background-color: #fffffe;
    border-radius: 5px;
`

export const Note = styled.p`
    margin: 0.5rem 2rem 1.5rem 0.5rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    letter-spacing: 0.08rem;
    line-height: 150%;
    white-space: pre-line;
    word-wrap: break-word;
`

export const Time = styled.div`
    position: absolute;
    bottom: 0.2rem;
    right: 1rem;
    font-family: -apple-system;
    font-size: 12.6px;
    line-height: 18.9px;
    color: #57606a;
`
