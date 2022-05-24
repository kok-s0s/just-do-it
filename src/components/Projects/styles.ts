import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ProjectLink = styled(motion.a)`
  margin: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
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
