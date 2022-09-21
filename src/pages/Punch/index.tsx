import { TodoLists } from '../../components/TodoLists'
import { Info } from '../../components/Info'
import { Container } from './styles'

export function Punch() {
  return (
    <Container>
      <TodoLists />
      <Info />
    </Container>
  )
}
