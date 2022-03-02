// import { Button } from '../Button'
import { Container } from './styles'
import { Link } from 'react-router-dom'

export function HomePage() {

  return (
    <Container>
      <Link to="/">回到欢迎页面</Link>
    </Container>
  )
}

