import styled from 'styled-components'

export const Content = styled.div`
    background-color: #f6f8fa;
    height: 200vh;
    width: 30vw;
    padding: 1rem 1rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
