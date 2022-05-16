import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Manage = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
    margin: 1rem 1rem 1rem 0.5rem;
    align-items: center;
    justify-items: center;
`

export const Card = styled.div`
    width: 300px;
    margin: 0.5rem;
`

export const Title = styled(motion.div)`
    position: relative;
    font-family: "Gill Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 3px;
    margin: 0 0 0.8rem 0;
    text-align: center;
    opacity: 0.6;
`

export const Icon = styled.div`
    position: absolute;
    right: 0.2rem;
    top: 0.3rem;
    cursor: pointer;
    opacity: 0.6;
`

export const Border = styled(motion.ul)`
    border: 4mm ridge rgba(255, 255, 255, 0.5);
    text-align: center;
    position: relative;
    height: 78vh;
    max-height: 200px;
    border-radius: 5px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    scrollbar-width: none;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Option = styled(motion.a)`
    margin: 0.5rem;
    text-align: center;
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
    opacity: 0.7;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    &:hover {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
        background: #fff;
        color: #000;
        opacity: 1;
    }
`
