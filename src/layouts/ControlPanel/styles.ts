import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SideBar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 5vw;
    height: 100vh;
    padding: 1rem 0.2rem;
    background-color: #bae8e8;
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30vh;
`

export const Image = styled.img`
    display: block;
    width: 70%;
    height: auto;
    margin: 1rem 0;
    border-radius: 50%;
`

export const Icon = styled(motion.div)`
    display: flex;
    font-size: 3rem;
    color: black;
    opacity: 0.7;
`

interface QuoteProps {
  family: string
  size: string
}

export const Quote = styled.div<QuoteProps>`
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-family: ${props => props.family};
    font-size: ${props => props.size};
    letter-spacing: 0.5rem;
    opacity: 0.45;
`
