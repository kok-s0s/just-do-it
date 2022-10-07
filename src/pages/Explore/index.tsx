import { Link } from 'react-router-dom'
import ControlPanel from '../../layouts/ControlPanel'
import { Box, Card, Container, Content, Idx, Next, Title } from './styles'

const DataList = [
  {
    title: 'book',
    href: '/book',
  },
  {
    title: 'bookmark',
    href: '/bookmark',
  },
  {
    title: 'leetcode',
    href: '/leetcode',
  },
  {
    title: 'technology',
    href: '/technology',
  },
  {
    title: 'culture',
    href: '/culture',
  },
  {
    title: 'music',
    href: '/music',
  },
  {
    title: 'stack',
    href: '/stack',
  },
  {
    title: 'tool',
    href: '/tool',
  },
]

export default function Explore() {
  return (
    <ControlPanel href="/">
      <Container>
        {DataList.map((item, index) => {
          return (
            <Card key={index}>
              <Box>
                <Content>
                  <Idx>
                    <span>0</span>
                    <span>{index + 1}</span>
                  </Idx>
                  <Title>{item.title}</Title>
                  <Link to={item.href}>
                    <Next>Go!</Next>
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
