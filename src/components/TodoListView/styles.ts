import styled from 'styled-components'

export const PlanItem = styled.div`
    position: relative;
    width: 20.6vw;
    height: 78vh;
    max-height: 78vh;
    background-color: #f6f8fa;
    border-radius: 5px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Header = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
`

export const Combination = styled.div`
    position: relative;
`

export const Count = styled.span`
    position: absolute;
    display: inline-block;
    top: 0.8rem;
    left: 1rem;
    border: none;
    padding: 0px 6px;
    background-color: #afb8c1;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: #24292f;
    border-radius: 24px;
`

export const ListTitle = styled.span`
    position: absolute;
    top: 0.65rem;
    left: 3rem;
`

export const AddItem = styled.span`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
`

export const Content = styled.div`
    margin-top: 5vh;
`
