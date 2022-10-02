import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-family: 'Macondo';
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  line-height: 1.5rem;
  transition: background ease 0.5s;
  &:hover {
    background-color: #33e1c426;
  }
  &.active {
    background-color: #fffffe;
  }
`
