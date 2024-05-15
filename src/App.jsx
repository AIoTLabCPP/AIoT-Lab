import { Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import Home from "./pages/Home";
import Team from "./pages/Team";
import Outcomes from "./pages/Outcomes";
import News from "./pages/News";

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
        <Route path="/outcomes" element={<Outcomes />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
