import { GlobalStyle } from './styles/GlobalStyle'
import { Welcome } from './pages/Welcome'
import { HomePage } from './pages/HomePage';
import { HashRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="home" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  )
}