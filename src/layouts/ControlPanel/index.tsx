import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ShowQuote } from '../../components/ShowQuote'
import { Plum } from '../../components/Plum'
import { Icon, Image, Options, SideBar } from './styles'

interface ControlPanelProps {
  children: React.ReactNode
  href: string
}

const ControlPanel: React.FC<ControlPanelProps> = (props) => {
  const info = window.localStorage.getItem('info')
  const avatar_url = info !== null ? JSON.parse(info).avatar_url : 'https://avatars.githubusercontent.com/u/46289777?v=4'

  return (
    <>
      <Plum />
      {props.children}
      <SideBar>
        <Options>
          <Image src={avatar_url} alt="avatar" />
          <Link to="/markdown">
            <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><ellipse cx="26.518" cy="45.689" fill="currentColor" rx="1.702" ry="1.752"/><path fill="currentColor" d="M42.873 22.51c-.996.133-1.875.812-1.875 1.508c0 .695.879 1.048 1.875.808c.912-.22 1.595-.864 1.595-1.456c0-.591-.683-.981-1.595-.86m-.125-.712c.912-.222 1.596-.866 1.596-1.456c0-.592-.684-.98-1.596-.859c-.996.132-1.873.813-1.873 1.506c0 .695.877 1.047 1.873.809"/><path fill="currentColor" d="M57.162 27.302h-6.035V20.65c0-9.377-9.135-11.65-17.99-11.649c-8.326 0-16.408 2.01-16.408 2.01l.003.009a13.485 13.485 0 0 0-3.254 1.123c-3.792 1.075-5.997 3.084-5.997 3.084v.016C4.165 17.721 2 21.733 2 26.273a13.76 13.76 0 0 0 4.466 10.191v15.032c0 .776.938 1.752 1.701 1.752h3.403v.898a.84.84 0 0 0 .827.853h14.51a.84.84 0 0 0 .826-.853v-.898h3.403c.12 0 .244-.031.368-.074l6.69-1.354h18.968c6.45 0 6.45-24.518 0-24.518M3.875 26.273c0-6.456 5.103-11.709 11.375-11.709c6.271 0 11.373 5.253 11.373 11.709c0 6.457-5.102 11.707-11.373 11.707c-6.272 0-11.375-5.25-11.375-11.707m27.087 25.01a.29.29 0 0 1-.035.035H8.375a.577.577 0 0 1-.035-.035v-13.39a12.882 12.882 0 0 0 6.909 2.017c.138 0 .272-.016.41-.021c.075.005.144.021.22.021c8.3 0 13.531-4.987 15.083-10.981v22.354m5.517-23.154v.045l-.014.004l.014.005v3.497c0-.439-.343-.796-.767-.796h-1.021c-.421 0-.764.356-.764.796v15.843c0 .439.343.796.764.796h1.021c.424 0 .767-.356.767-.796V50.2l-3.643.737V24.352c0-6.823-3.709-11.088-8.345-12.794c2.582-.349 5.602-.627 8.645-.627c9.338 0 14.656 2.494 15.854 7.421a1.522 1.522 0 0 0-.758-.286c-1.211-.099-2.336 1.289-2.336 3.113c0 1.825 1.125 2.984 2.336 2.64c.389-.111.736-.368 1.02-.719v1.395l-9.744 2.808h-2.191a.83.83 0 0 0-.838.826m21.267 21.939H38.182V29.053h19.564v21.015"/><path fill="currentColor" d="M15.25 36.124c5.284 0 9.567-4.413 9.567-9.853s-4.283-9.848-9.567-9.848c-5.286 0-9.568 4.408-9.568 9.848s4.281 9.853 9.568 9.853m4.074-17.107c1.637 0 2.962 1.368 2.962 3.053c0 1.683-1.325 3.051-2.962 3.051s-2.965-1.368-2.965-3.051c0-1.685 1.328-3.053 2.965-3.053m-5.917 7.256c1.017 0 1.84.849 1.84 1.892c0 1.048-.824 1.896-1.84 1.896s-1.84-.849-1.84-1.896c0-1.043.824-1.892 1.84-1.892m-3.31 4.13c.628 0 1.139.525 1.139 1.174c0 .647-.511 1.173-1.139 1.173c-.63 0-1.14-.525-1.14-1.173s.51-1.174 1.14-1.174"/></svg>
            </Icon>
          </Link>
          <Link to="/markdown">
            <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="currentColor" d="M149 159.8h23a52 52 0 0 0 52-52a45 45 0 0 0-.8-9l16.4 84.4a28 28 0 0 1-47.4 24.7l-43.2-48Z" opacity=".2"/><path fill="currentColor" d="M192 108a8 8 0 0 0-8-8h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8Zm-88-8h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16Z"/><path fill="currentColor" d="M247.5 181.7h-.1l-16.3-84.5c0-.1 0-.1-.1-.2a60 60 0 0 0-59-49.3L84 48a59.9 59.9 0 0 0-59.1 49.6v.2L8.6 181.6a35.9 35.9 0 0 0 29.2 41.7a31.8 31.8 0 0 0 6.2.6a36.4 36.4 0 0 0 25.5-10.5l.4-.5l40.7-45l34.9-.2l40.6 45.3l.5.5A36 36 0 0 0 212 224a33.6 33.6 0 0 0 6.3-.6a36.1 36.1 0 0 0 29.2-41.7ZM107 152a8.3 8.3 0 0 0-5.9 2.6L58 202.3a20 20 0 0 1-33.7-17.7l16.3-84.1a.9.9 0 0 0 .1-.5A43.9 43.9 0 0 1 84 64l88-.3a44 44 0 1 1 0 88Zm108.5 55.7a20.1 20.1 0 0 1-17.5-5.4l-31.1-34.5h5.1a60 60 0 0 0 51-28.3l8.7 45.2a20 20 0 0 1-16.2 23Z"/></svg>
            </Icon>
          </Link>
          <Link to="/markdown">
            <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 4a2.121 2.121 0 0 1 0 3l-9.5 9.5l-4 1l1-3.944l9.504-9.552a2.116 2.116 0 0 1 2.864-.125zM9.5 17.5h8m-2-11l1 1"/></svg>
            </Icon>
          </Link>
        </Options>

        <ShowQuote />

        <Link to={props.href}>
          <Icon whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M43.3 19.355c-.894-.524-1.767-.789-2.457-.789c-.686 0-1.188.265-1.34.789c-.31 1.049.896 2.749 2.686 3.798c.896.526 1.768.788 2.456.788c.686 0 1.188-.262 1.344-.788c.307-1.049-.897-2.749-2.689-3.798M29.13 48.144c-.645-.231-1.554-.277-2.576-.084c-2.04.391-3.744 1.591-3.807 2.682c-.032.545.354.962 1.002 1.191c.647.231 1.557.275 2.576.081c2.041-.388 3.746-1.587 3.809-2.681c.032-.545-.354-.961-1.004-1.189m9.872-2.221c-.646-.229-1.558-.277-2.576-.082c-2.039.389-3.742 1.586-3.805 2.68c-.03.546.355.961 1.002 1.191s1.558.275 2.576.083c2.043-.39 3.742-1.588 3.807-2.681c.028-.546-.356-.96-1.004-1.191m9.464-1.934c-.645-.229-1.558-.275-2.578-.081c-2.037.389-3.742 1.587-3.803 2.681c-.03.545.354.961 1.002 1.191c.646.23 1.558.275 2.578.081c2.041-.389 3.742-1.587 3.805-2.679c.03-.547-.356-.962-1.004-1.193M21.38 26.28c-.54.424-1.065 1.17-1.449 2.136c-.762 1.932-.66 4.01.227 4.647c.446.318 1.004.217 1.544-.207c.543-.424 1.068-1.17 1.45-2.135c.762-1.931.661-4.012-.227-4.649c-.445-.318-1.004-.217-1.545.208m-11-3.349c-.543.424-1.068 1.168-1.45 2.134c-.764 1.931-.663 4.012.229 4.647c.442.319 1 .216 1.543-.208c.54-.424 1.065-1.169 1.447-2.135c.764-1.93.662-4.011-.227-4.649c-.444-.317-1.002-.215-1.542.211"/><path fill="currentColor" d="m61.692 35.723l-6.555-19.768c-.99-2.986-4.104-6.103-7.092-7.093l-19.77-6.555c-1.234-.409-2.343-.407-3.197-.004c-.924.251-1.98.649-3.062 1.153c-1.479.689-3.303 1.736-4.077 2.647a4.874 4.874 0 0 0-.253.233L4.427 19.598c-2.061 2.06-2.978 5.98-2.087 8.925l5.762 19.084c.105.349.235.678.387.979c.464 1.412 2.366 3.391 2.95 3.975c.586.585 2.568 2.492 3.98 2.955c.3.149.629.279.976.384l19.083 5.762c.74.225 1.553.338 2.418.338h.001c2.479 0 5.032-.952 6.504-2.424l13.262-13.263c.084-.084.16-.168.234-.253c.912-.777 1.959-2.601 2.646-4.075c.507-1.087.905-2.146 1.156-3.071c.404-.859.402-1.959-.007-3.191M11.509 49.767c-.727-.884-1.112-1.539-1.189-1.811l-.074-.184a4.155 4.155 0 0 1-.29-.724L4.192 27.963c-.679-2.245.055-5.449 1.603-6.996L19.057 7.704c.068-.069.14-.129.209-.189l.128-.134c.226-.286.839-.752 1.719-1.27c.839.265 1.553 1.057 1.94 2.343l5.762 19.085c.784 2.593-.042 6.159-1.845 7.962L13.71 48.763c-.722.721-1.488 1.034-2.201 1.004m45.107-5.16l-.137.133c-.059.068-.117.137-.186.205l-13.26 13.263c-1.11 1.11-3.175 1.855-5.136 1.855h-.001a6.428 6.428 0 0 1-1.859-.254l-19.083-5.762a4.22 4.22 0 0 1-.724-.291l-.185-.072c-.271-.076-.926-.463-1.81-1.19c-.031-.714.28-1.479 1.003-2.202l13.259-13.261c1.804-1.804 5.368-2.63 7.962-1.846l19.083 5.763c1.288.389 2.08 1.104 2.344 1.943c-.516.878-.984 1.489-1.27 1.716m3.314-6.48l-.076.2c-.094.357-.223.753-.372 1.163c-.537.103-1.197.047-1.962-.207l-19.769-6.555c-2.688-.89-5.59-3.792-6.478-6.479L24.718 6.48c-.253-.765-.31-1.424-.207-1.962c.408-.147.801-.276 1.157-.37l.203-.079c.173-.09.396-.136.663-.136c.332 0 .713.071 1.134.21l19.769 6.555c2.388.792 5.072 3.478 5.863 5.865l6.556 19.768c.248.754.276 1.407.074 1.796"/></svg>
          </Icon>
        </Link>
      </SideBar>
    </>
  )
}

ControlPanel.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default ControlPanel
