import { Link } from 'react-router-dom'
import BackIcon from '../../../assets/images/back.svg'
import { Icon } from './styles'

interface BasicProps {
  children: React.ReactNode
  href: string
}

const Basic: React.FC<BasicProps> = (props) => {
  return (
    <>
      {props.children}
      <Link to={props.href}>
        <Icon
          src={BackIcon}
          alt="icon"
        />
      </Link>
    </>
  )
}

export default Basic
