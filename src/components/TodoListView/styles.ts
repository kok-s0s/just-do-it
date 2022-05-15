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
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: #f6f8fa;
`

export const Combination = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.2rem;
`

export const Count = styled.span`
    flex: 0 0 auto;
    margin: 0.6rem 0 0 0.6rem;
    border: none;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #afb8c1;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4rem;
    text-align: center;
    color: #24292f;
    border-radius: 50%;
`

export const ListTitle = styled.span`
    flex: 1 1 auto;
    margin: 0.6rem 0 0 1rem;
    opacity: 0.7;
`

export const AddItem = styled.span`
    flex: 0;
    margin: 0.5rem 0.5rem 0 0;
    cursor: pointer;
`

export const Content = styled.div`
    > * {
        &:first-child {
            margin-top: 0.2rem;
        }
    }
`
