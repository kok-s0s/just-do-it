import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Image = styled.div`
    animation: ${rotate} 3s linear infinite;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const BClickSame = styled.div`
    height: 70vh;
`

export const BClickLeft = styled(BClickSame)`
    padding-left: 8rem;
`

export const BClickRight = styled(BClickSame)`
    padding-right: 8rem;
`

export const BTitle = styled.div`
    font-size: 2.3rem;
    font-weight: 500;
    letter-spacing: 2px;
    color: #272343;
`

export const Button = styled.button`
    width: 270px;
    align-self: center;
    background-color: #bae8e8;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: rgba(80, 80, 80);
    cursor: pointer;
    display: inline-block;
    font-family: 'Macondo','Noto Serif SC';
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 23px;
    outline: none;
    padding: 0.75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }
    &:focus {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
    }
`
