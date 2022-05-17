import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SideBar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    width: 5vw;
    padding: 1rem 0.2rem;
`

export const Back = styled(motion.div)`
    font-size: 3rem;
    color: black;
`

