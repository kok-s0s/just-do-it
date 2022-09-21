import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  & > div:first-child {
    flex: 1;
    margin-right: 0.5rem;
  }
`
