import styled from 'styled-components'

export const WebSites = styled.div`
    display: flex;
    max-height: 85vh;
    margin: 2rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Link = styled.a`
    cursor: pointer;
`

export const Icon = styled.img`
    width: 128px;
    height: 128px;
    border-radius: 6px;
`
