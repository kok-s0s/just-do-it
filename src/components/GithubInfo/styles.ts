import { motion } from 'framer-motion'
import styled from 'styled-components'

export const InfoScreen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 93%;
  padding: 1.5rem;
  background-color: #fffffe;
  border-radius: 10px;
`

export const Image = styled.img`
  width: 70%;
  height: auto;
  border-radius: 50%;
`

export const AlignRight = styled.div`
  width: 88%;
  text-align: left;
`

export const FontStyle = styled.div`
  margin-bottom: 0.7rem;
  font-size: 21px;
  letter-spacing: 1px;
  color: #7a7f86;
`

export const UserName = styled(FontStyle)`
  margin-bottom: 1rem;
  font-size: 22px;
`

export const Location = styled(FontStyle)`
  margin-left: -1rem;
  line-height: 22px;
`

export const Blog = styled(FontStyle)`
  margin-left: -1rem;
  line-height: 22px;
`

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7%;
  padding: 1rem 4rem;
`

export const Icon = styled(motion.div)`
  display: flex;
  font-size: 2rem;
  color: rgba(80, 80, 80, 0.4);
  cursor: pointer;
`
