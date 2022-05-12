import { HashRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { HomePage } from './pages/HomePage'
import { Punch } from './pages/Punch'
import { Explore } from './pages/Explore'

export function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="punch" element={<Punch />} />
          <Route path="explore" element={<Explore />} />
        </Routes>
      </HashRouter>
    </>
  )
}
