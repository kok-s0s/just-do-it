import { Link } from 'react-router-dom'
import { BText, Back } from './styles'

interface BasicProps {
  children: React.ReactNode
  href: string
}

const Basic: React.FC<BasicProps> = (props) => {
  return (
    <>
      {props.children}
      <Link to={props.href}>
        <Back>
          <BText>返回</BText>
        </Back>
      </Link>
    </>
  )
}

export default Basic
