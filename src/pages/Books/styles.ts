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
    margin-bottom: 1.5rem;
    font-family: STSong;
    font-size: 1.3rem;
    text-align: center;
    letter-spacing: 2px;
    color: #565f68;
`
