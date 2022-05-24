import styled from 'styled-components'

export const Content = styled.div`
  height: 200vh;
  width: 30vw;
  padding: 1rem 1rem;
  background-color: #f6f8fa;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
