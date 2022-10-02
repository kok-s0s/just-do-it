import styled from 'styled-components'

export const ShowBook = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  scrollbar-width: none; /* for Firefox */
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ClassDescription = styled.div`
  margin-bottom: 1.5rem;
  font-family: 'Macondo', 'Noto Serif SC';
  font-size: 1.4rem;
  text-align: center;
  letter-spacing: 2px;
  color: #565f68;
`

export const Image = styled.img`
  width: 200px;
`
