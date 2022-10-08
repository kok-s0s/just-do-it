import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import HomePage from "./pages/HomePage";
import Punch from "./pages/Punch";
import Explore from "./pages/Explore";
import Books from "./pages/Books";
import BookMark from "./pages/BookMark";
import LeetCode from "./pages/LeetCode";
import Technology from "./pages/Technology";
import Culture from "./pages/Culture";
import Music from "./pages/Music";
import Stack from "./pages/Stack";
import Tool from "./pages/Tool";
import Write from "./pages/Write";
import Picture from "./pages/Picture";
import Game from "./pages/Game";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="punch" element={<Punch />} />
          <Route path="explore" element={<Explore />} />
          <Route path="book" element={<Books />} />
          <Route path="bookmark" element={<BookMark />} />
          <Route path="leetcode" element={<LeetCode />} />
          <Route path="technology" element={<Technology />} />
          <Route path="culture" element={<Culture />} />
          <Route path="music" element={<Music />} />
          <Route path="stack" element={<Stack />} />
          <Route path="tool" element={<Tool />} />
          <Route path="picture" element={<Picture />} />
          <Route path="game" element={<Game />} />
          <Route path="write" element={<Write />} />
        </Routes>
      </HashRouter>
    </>
  );
}
