import styled from 'styled-components'

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
    color: rgba(80, 80, 80, 0.7);
`
