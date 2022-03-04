import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  background-color: #D8EFEF;
`

export const Back = styled.button`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  border-radius: 50%;
  padding: 15px;
  background-color: #69A9C9;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  &:hover,
  &:focus {
    color: #3874CB;
  }
  &:active {
    color: #cfdef2;
  }
`

export const BText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  box-sizing: border-box;
  width: 32px;
  height: 32px;
`