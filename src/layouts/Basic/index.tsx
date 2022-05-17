import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
        <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M3 18L19 2v10h42v12H19v10zm11 28.346C14 42.848 11.308 40 8 40H2v22h6c3.308 0 6-2.848 6-6.348c0-1.84-.748-3.492-1.936-4.652A6.487 6.487 0 0 0 14 46.346M8 58.617H5.125v-5.926H8c1.654 0 3 1.328 3 2.961s-1.346 2.965-3 2.965m0-9.308H5.125v-5.926H8c1.654 0 3 1.33 3 2.963s-1.346 2.963-3 2.963m32 9.308c-1.654 0-3-1.332-3-2.965v-9.307c0-1.633 1.346-2.963 3-2.963s3 1.33 3 2.963h3C46 42.848 43.308 40 40 40s-6 2.848-6 6.346v9.307c0 3.5 2.692 6.348 6 6.348s6-2.848 6-6.348h-3c0 1.632-1.346 2.964-3 2.964M62 40h-3.152l-3.886 9.5H53V40h-3v22h3v-9.5h1.962l3.886 9.5H62l-4.424-11zM27 62h3l-4-22h-5l-3 22h3l.826-6.059h4.072L27 62zm-4.713-9.441l1.284-9.416l1.712 9.416h-2.996z"/></svg>
        </Icon>
      </Link>
    </>
  )
}

Basic.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default Basic
