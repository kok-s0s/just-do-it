import { BClick } from './../../components/AddTodoItem/styles'
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
  overflow: hidden;
  transition: 0.5s;
  & .next {
    display: flex;
    transition: 0.5s;
    z-index: 1;
  }
  &:hover {
    transform: translateY(-30px);
  }
  &:hover .title {
    transform: translateX(-20px);
  }
  &:hover .next {
    transform: translateY(10px);
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
  width: 100%;
  height: 100%;
`

export const Idx = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  row-gap: 1.5rem;
  width: 100%;
  font-size: 9rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.1);
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2.5rem;
  font-weight: 600;
  color: #deeded;
  letter-spacing: 1px;
  transition: 0.5s;
`

export const Next = styled.a`
  color: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 1);
    background: #bae8e8;
    color: rgba(0, 0, 0, 0.5);
  }
`
