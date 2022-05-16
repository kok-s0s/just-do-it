import { Link } from 'react-router-dom'
import Basic from '../../layouts/Basic'
import { Boss, Box, Card, Container, Content, Game, GameNext, Idx, Mes, Next, Title } from './styles'

const DataList = [
  {
    title: 'Books',
    mes: '图书馆',
    href: '/books',
  },
  {
    title: 'Technology',
    mes: '信息浏览',
    href: '/technology',
  },
  {
    title: 'Projects',
    mes: '实战项目',
    href: '/projects',
  },
  {
    title: 'CodeBlock',
    mes: '码无止境',
    href: '/codeblock',
  },
]

export function Explore() {
  return (
    <Basic href="/">
      <Boss>
        <Container>
          {DataList.map((item, index) => {
            return (
              <Card key={index}>
                <Box>
                  <Content>
                    <Idx>{`0${index + 1}`}</Idx>
                    <Title>{item.title}</Title>
                    <Mes>{item.mes}</Mes>
                    <Link to={item.href}>
                      <Next>Read More</Next>
                    </Link>
                  </Content>
                </Box>
              </Card>
            )
          })}
        </Container>
        <Game>
          <Link to="/animes">
            <GameNext>Animes</GameNext>
          </Link>

          <Link to="/bookmark">
            <GameNext>BookMark</GameNext>
          </Link>
        </Game>
      </Boss>
    </Basic>
  )
}
