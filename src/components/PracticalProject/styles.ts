import styled from 'styled-components'

export const Projects = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 85vh;
    margin-left: 2rem;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Link = styled.a`
    float: right;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #8bb7b9;
    &:focus,
    &:active {
        color: black;
    }
    &:before,
    &after {
        content: '点点看 =>';
        font-size: 1rem;
    }
`
