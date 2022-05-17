import { HashRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { HomePage } from './pages/HomePage'
import { Punch } from './pages/Punch'
import { Explore } from './pages/Explore'
import { Books } from './pages/Books'
import { Technology } from './pages/Technology'
import { Projects } from './pages/Projects'
import { CodeBlock } from './pages/CodeBlock'
import { Animes } from './pages/Animes'
import { BookMark } from './pages/BookMark'
import { Markdown } from './pages/Markdonw'

export function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="punch" element={<Punch />} />
          <Route path="explore" element={<Explore />} />
          <Route path="books" element={<Books />} />
          <Route path="technology" element={<Technology />} />
          <Route path="projects" element={<Projects />} />
          <Route path="codeblock" element={<CodeBlock />} />
          <Route path="animes" element={<Animes />} />
          <Route path="bookmark" element={<BookMark />} />
          <Route path="markdown" element={<Markdown />} />
        </Routes>
      </HashRouter>
    </>
  )
}
