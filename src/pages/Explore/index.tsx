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
    title: 'Culture',
    mes: '2.5',
    href: '/culture',
  },
  {
    title: 'Stack',
    mes: '兵火库',
    href: '/stack',
  },
  {
    title: 'Tools',
    mes: '工具箱',
    href: '/tools',
  }
]

export function Explore() {
  return (
    <ControlPanel href="/">
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
