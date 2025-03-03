import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Software from "./pages/Software";
import Publications from "./pages/Publications";
import News from "./pages/News";
import Alumni from "./pages/Alumni";

function ScrollToTopOnPageChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTopOnPageChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/software" element={<Software />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
