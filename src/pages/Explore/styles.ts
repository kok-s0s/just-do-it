import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  row-gap: 3rem;
  column-gap: 2rem;
  width: 95vw;
  height: 100vh;
  padding: 2rem;
  background: #232427;
`

export const Card = styled.div`
  position: relative;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 36px;
  transition: 0.5s;
`

export const Box = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: #2a2b2f;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: first;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    transform: translateY(-30px);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem 0 0 0;
`

export const Idx = styled.div`
  position: absolute;
  top: -20px;
  width: 90%;
  height: 100%;
  font-size: 11rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.1);
  & > span:nth-child(2) {
    position: absolute;
    left: 55%;
    display: flex;
    width: 50%;
    justify-content: center;
  }
`

export const Title = styled.div`
  // font-family: -apple-system;
  // text-transform: capitalize;
  font-size: 2.5rem;
  font-weight: 600;
  color: #deeded;
  letter-spacing: 1px;
`

export const Next = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  padding: 8px 20px;
  background: black;
  border-radius: 5px;
  text-decoration: none;
  color: rgba(80, 80, 80);
  background-color: #bae8e8;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
  }
`
