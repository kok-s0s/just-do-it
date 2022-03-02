import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #D8EFEF;
`

export const Logo = styled.img`
  margin-bottom: 1rem;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  padding: 2rem 0 5rem 0;
`

export const Text = styled.p`
  color: #094067;
  font-size: 18px;
  line-height: 32px;
  font-weight: 500;
`

export const Button = styled.button`
  background-color: #3DD1E7;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: .75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 450px;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: '';
    position: absolute;
    border: 2.2px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }
`

export const FDBK = styled.a`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  border-radius: 50%;
  padding: 15px;
  background-color: #69A9C9;
  color: white;
  text-decoration : none;
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