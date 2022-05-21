import styled from 'styled-components'

export const ShowItem = styled.div`
    position: relative;
    min-height: 8vh;
    border: 1px solid #e3e6ea;
    margin: 0.6rem 0.5rem;
    padding: 0.3rem;
    background-color: #fffffe;
    border-radius: 5px;
`

export const More = styled.span`
    position: absolute;
    right: 0.4rem;
`

export const Note = styled.p`
    margin: 0.2rem 2rem 1.5rem 2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.08rem;
    line-height: 150%;
    white-space: pre-line;
    word-wrap: break-word;
    color: rgba(80, 80, 80, 0.8);
`

export const Time = styled.div`
    position: absolute;
    left: 2rem;
    bottom: 0.2rem;
    font-family: -apple-system;
    font-size: 12.6px;
    line-height: 18.9px;
    color: rgba(80, 80, 80, 0.7);
`

export const Input = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    letter-spacing: 1px;
    border-radius: 6px;
    border-style: solid;
    border-width: 0.1px;
    border-color: #e3e6ea;
    font-family: -apple-system;
    font-size: 14px;
    line-height: 21px;
    padding: 8px 12px;
    &:focus {
        outline: none !important;
        border-color: #719ece;
        box-shadow: 0 0 10px #719ece;
    }
`
