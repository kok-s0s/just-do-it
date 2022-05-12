import { Link } from 'react-router-dom'
import logoUrl from '../../../assets/images/logo.png'
import { BText, Button, Container, Desc, FDBK, Logo, Text } from './styles'

export function Welcome() {
  return (
    <Container>
      <Logo src={logoUrl} alt="logo" />
      <Desc>
        <Text>
          这是一个用户自我驱动的软件，用户可以使用这个软件探索计算机世界的一部分美好；
        </Text>
        <Text>我的工作只是分享我大学所知道的知识和学会的方法；</Text>
        <Text>
          这个项目最终会开源，你可以任意修改其中的代码管理你自己的所知所想。
        </Text>
        <Text>当然最重要的是，学计算机，玩得开心！</Text>
      </Desc>
      <Link to="/home">
        <Button>开始使用</Button>
      </Link>
      <FDBK
        href="https://github.com/kok-s0s/just-do-it/issues"
        target="_blank"
      >
        <BText>反馈</BText>
      </FDBK>
    </Container>
  )
}
