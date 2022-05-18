import styled from 'styled-components'

export const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 75vh;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
