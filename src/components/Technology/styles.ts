import styled from 'styled-components'

export const TextH = styled.div`
    display: flex;
    align-content: center;
    margin-left: 3rem;
    color: #565f67;
    font-size: 1.4rem;
`

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

export const LinkWeb = styled.a`
    cursor: pointer;
    color: #565f67;
`

export const Icon = styled.img`
    width: 128px;
    height: 128px;
    margin-right: 1rem;
    border-radius: 6px;
`

export const MessageBox = styled.div`
    display: flex;
    margin-left: 2rem;
    padding-top: 1rem;
`

export const Articles = styled.div`
    width: 60vw;
    max-height: 50vh;
    margin-right: 2rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const IconForArtice = styled.img`
    width: 300px;
    height: 300px;
    margin-right: 1rem;
    border-radius: 6px;
`

export const PunchButton = styled.div`
    display: flex;
    flex-direction: column;
`
