import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    row-gap: 2rem;
    column-gap: 2rem;
    width: 95vw;
    height: 100vh;
    padding: 1.8rem;
    background: #232427;
    @media (max-width: 1280px) {
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    }
`

export const Card = styled.div`
    position: relative;
    height: 360px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: 0.5s;
`

export const Box = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #2a2b2f;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: first;
    overflow: hidden;
    transition: 0.5s;
    &:hover {
      transform: translateY(-30px);
    }
    &:before {
      content: "";
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
    justify-content: space-between;
    align-items: center;
    height: 70%;
    padding: 20px;
    margin-top: 70px;
`

export const Idx = styled.h2`
    position: absolute;
    top: -06px;
    right: 10px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
`

export const Title = styled.h3`
    font-size: 1.8rem;
    color: #fffffe;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
`

export const Mes = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 4px;
    color: #fffffe;
    z-index: 1;
    transition: 0.5s;
    text-align: center;
`

export const Next = styled.a`
    font-family: "Gill Sans", sans-serif;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    background-color: #bae8e8;
    color: #272343;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
        background: #fff;
        color: #000;
    }
`
