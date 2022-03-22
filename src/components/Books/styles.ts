import styled from 'styled-components'

export const ShowBook = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const ClassDescription = styled.div`
    color: #565f68;
    text-align: center;
    font-size: 20px;
    margin-bottom: 1.5rem;
`
