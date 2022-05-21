import styled from 'styled-components'

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

export const BClick = styled.button`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: normal;
    border-radius: 6px;
    padding: 5px 16px;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    flex-grow: 1;
`

export const FlexBox = styled.div`
    display: flex;
    margin-top: 0.25rem;
`

export const Confirm = styled(BClick)`
    border-color: #99c49e;
    margin-right: 0.2rem;
    background-color: #2da44e;
    color: #ffffff;
`

export const Cancel = styled(BClick)`
    border-color: #e3e6ea;
    margin-left: 0.2rem;
    background-color: #f6f8fa;
    color: #24292f;
`
