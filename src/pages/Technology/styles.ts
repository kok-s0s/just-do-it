import styled from 'styled-components'

export const WebSites = styled.div`
  display: flex;
  max-height: 85vh;
  padding: 1rem;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
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
  width: 64px;
  height: 64px;
  margin-right: 1rem;
`

export const MesBorder = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`

export const Articles = styled.div`
  margin: 1rem;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`
