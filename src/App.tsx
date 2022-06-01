import { HashRouter, Route, Routes } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import { HomePage } from './pages/HomePage'
import { Punch } from './pages/Punch'
import { Explore } from './pages/Explore'
import { Books } from './pages/Books'
import { Technology } from './pages/Technology'
import { CodeBlock } from './pages/CodeBlock'
import { Culture } from './pages/Culture'
import { BookMark } from './pages/BookMark'
import { Markdown } from './pages/Markdonw'
import { Stack } from './pages/Stack'
import { Tools } from './pages/Tools'

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
          <Route path="codeblock" element={<CodeBlock />} />
          <Route path="culture" element={<Culture />} />
          <Route path="bookmark" element={<BookMark />} />
          <Route path="markdown" element={<Markdown />} />
          <Route path="stack" element={<Stack />} />
          <Route path="tools" element={<Tools />} />
        </Routes>
      </HashRouter>
    </>
  )
}
