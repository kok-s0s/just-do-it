import { Link } from 'react-router-dom'
import Basic from '../../layouts/Basic'

export function Explore() {
  return (
    <Basic href="/">
      <Link to="/books">
        books
      </Link>
      <Link to="/technology">
        technology
      </Link>
      <Link to="/projects">
        project
      </Link>
      <Link to="/codeblock">
        codeblock
      </Link>
    </Basic>
  )
}
