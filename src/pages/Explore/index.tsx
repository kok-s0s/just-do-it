import { Link } from 'react-router-dom'
import ControlPanel from '../../layouts/ControlPanel'
import { Box, Card, Container, Content, Idx, Mes, Next, Title } from './styles'

const DataList = [
  {
    title: 'Books',
    mes: '图书馆',
    href: '/books',
  },
  {
    title: 'BookMark',
    mes: '书签集',
    href: '/bookmark',
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
  {
    title: 'Technology',
    mes: '信息浏览',
    href: '/technology',
  },
  {
    title: 'Animes',
    mes: 'ACGN',
    href: '/animes',
  },
]

export function Explore() {
  return (
    <ControlPanel>
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
    </ControlPanel>
  )
}
