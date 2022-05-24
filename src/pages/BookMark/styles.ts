import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Manage = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 70vw;
  padding: 1rem;
  align-items: center;
  justify-items: center;
`

export const Card = styled.div`
  width: 285px;
  margin: 0.5rem;
`

export const Header = styled(motion.div)`
  position: relative;
`

export const Title = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 3px;
  margin: 0 0 0.8rem 0;
  text-align: center;
  color: rgba(80, 80, 80, 0.6);
  cursor: pointer;
`

export const Icon = styled(motion.div)`
  position: absolute;
  right: 0.2rem;
  top: 0.3rem;
  font-size: 1.3rem;
  cursor: pointer;
  color: rgba(80, 80, 80, 0.9);
`

export const Border = styled(motion.ul)`
  border: 2.5mm ridge rgba(255, 255, 255, 0.5);
  text-align: center;
  position: relative;
  height: 185px;
  max-height: 185px;
  border-radius: 5px;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Option = styled(motion.a)`
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

export const Search = styled(Card)`
  position: fixed;
  top: 2rem;
  right: 5vw;
  display: flex;
  width: 270px;
  flex-direction: column;
  align-items: center;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 80%;
`

export const SearchInput = styled.input`
  font-family: 'Macondo', cursive;
  font-size: 1.2rem;
  border: none;
  outline:none;
  border-bottom: solid 5px rgba(0, 0, 0, 0.4);
  background-color: inherit;
  letter-spacing: 2px;
  padding-left: 0.5rem;
  border-radius: 4px;
`

export const Answer = styled(Border)`
  height: auto;
  max-width: 300px;
  max-height: 600px;
  margin-right: 0.5rem;
  border: 4mm ridge rgba(255, 255, 255, 0.5);
`

export const HighLight = styled.span`
  background-color: #ffef0ade;
`

export const False = styled(motion.div)`
  font-size: 10rem;
  cursor: pointer;
  color: rgba(80, 80, 80, 0.5);
`
